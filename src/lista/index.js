import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    StyleSheet } from 'react-native';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data,
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }

    carregaIcone(likeada) {
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    like() {
        let feed = this.state.feed;

        if(feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1,
                },
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1,
                },
            });
        }
    }

    mostraLikes(likers) {
        let feed = this.state.feed;

        if(feed.likers <= 0) {
            return;
        } else {
            return(
                <Text style = { styles.likes } >
                    { feed.likers } { feed.likers > 1 ? 'Curtidas' : 'Curtida' }
                </Text>
            );
        }
    }

    render() {
        return(
            <View style = { styles.areaFeed } >

                <View style = { styles.viewPerfil } >
                    <Image
                        style = { styles.fotoPerfil }
                        source = {{ uri: this.state.feed.imgperfil }}
                    />

                    <Text style = { styles.nomeUsuario }>
                        { this.state.feed.nome }
                    </Text>
                </View>

                <Image
                    resizeMode = 'cover'
                    style = { styles.fotoFeed }
                    source = {{ uri: this.state.feed.imgPublicacao }}
                />

                <View style = { styles.btnView } >
                    <TouchableOpacity onPress = { this.like } >
                        <Image
                            source = { this.carregaIcone(this.state.feed.likeada) }
                            style = { styles.like }
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style = { styles.btnSend } >
                        <Image
                            source = { require('../img/send.png') }
                            style = { styles.like }
                        />
                    </TouchableOpacity>
                </View>

                { this.mostraLikes(this.state.feed.likers ) }

                <View style = { styles.viewRodape } >
                    <Text style = { styles.nomeRodape } > {this.state.feed.nome} </Text>
                    <Text style = { styles.descRodape } > {this.state.feed.descricao} </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed: {
        marginBottom: 20,
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 20,
    },
    nomeUsuario: {
        fontSize: 20,
        textAlign: 'left',
        color: '#000',
        paddingLeft: 10,
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 12,
    },
    fotoFeed: {
        flex: 1,
        height: 400,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    btnView: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
    },
    like: {
        width: 33,
        height: 33,
    },  
    btnSend: {
        paddingLeft: 10,
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 14,
        color: '#000',
    },
    nomeRodape: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5,
    }
});

export default Lista;