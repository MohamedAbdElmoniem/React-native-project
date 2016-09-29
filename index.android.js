/////////////////////////////////////////////////////////

import React, {Component} from 'react';
import {Column, Row} from 'react-native-flexbox-grid';
import MapView from 'react-native-maps';
import {
    Container,
    Header,
    Title,
    Content,
    Badge,
    Icon,
    Button,
    Card,
    CardItem,
    Spinner,
    Tabs,
    Grid,
    Col
} from 'native-base';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Alert,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import Theme from './Theme';
import Modal from 'react-native-simple-modal';

import AppIntro from 'react-native-app-intro';

import ActionButton from 'react-native-action-button';

import DropdownAlert from 'react-native-dropdownalert'

import Accordion from 'react-native-collapsible/Accordion';

import { SocialIcon } from 'react-native-elements'

import { CheckBox } from 'react-native-elements'

import { FormLabel, FormInput } from 'react-native-elements'

import TabBar from 'react-native-xtabbar';

import * as Animatable from 'react-native-animatable';

import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';


const MAIN_INFO_COLOR = '#4682b4'
const MAIN_WARN_COLOR = '#cd853f'
const MAIN_ERROR_COLOR = '#cc3232'
const MAIN_CUSTOM_COLOR = '#6441A4'


const SECTIONS = [
    {
        title: 'First',
        content: 'Lorem ipsum...',
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...',
    }
];


//var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

/*
var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
    // Make it snap back really quickly after canceling pop
    snapVelocity: 8,
    // Make it so we can drag anywhere on the screen
    edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
    // A very tighly wound spring will make this transition fast
    springTension: 100,
    springFriction: 1,
    // Use our custom gesture defined above
    gestures: {
        pop: CustomLeftToRightGesture,
    }
});
 */

var IntroPage = React.createClass({

    render(){

        const pageArray = [{
            title: 'Page 1',
            description: 'Description 1',
            img: 'https://goo.gl/Bnc3XP',
            imgStyle: {
                height: 80 * 2.5,
                width: 109 * 2.5,
            },
            backgroundColor: '#fa931d',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Page 2',
            description: 'Description 2',
            img: 'https://goo.gl/GPO6JB',
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
        }];

        return (

            <AppIntro
                onNextBtnClick={this.nextBtnHandle}
                onDoneBtnClick={() => {
                    Alert.alert('Done');
                    this.props.navigator.push({id: 2,});
                }}
                onSlideChange={this.onSlideChangeHandle}
                pageArray={pageArray}
            />



        );
    }

});


var PageOne = React.createClass({


    _handlePress() {
        this.props.navigator.push({id: 3,});
    },

    _handlePress2() {
        this.props.navigator.push({id: 5,});
    },

    render() {


        return (


            <View style={[styles.container, {backgroundColor: 'gray'}]}>


                <Text style={styles.welcome}>Greetings!</Text>

                <TouchableOpacity onPress={this._handlePress} style={{margin: 30}}>
                    <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
                        <Text style={styles.welcome}>Go to page two</Text>
                    </View>
                </TouchableOpacity>


                <Row size={12} style={{backgroundColor: 'green'}}>

                    <Column style={{height: 200}} sm={12}>
                        <MapView
                            style={{flex: 1}}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
                    </Column>
                </Row>


                <Row size={12} style={{backgroundColor: 'blue'}}>
                    <Column sm={5}></Column>
                    <Column sm={4}>
                        <Button rounded info> Login </Button>
                    </Column>
                    <Column sm={3}></Column>
                </Row>


                <Row size={12} style={{backgroundColor: 'red'}}>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            First Column
                        </Text>
                    </Column>
                    <Column sm={6} md={4} lg={3}>
                        <Text>
                            Second Column
                        </Text>
                    </Column>
                </Row>


                <TouchableOpacity onPress={this._handlePress2} style={{margin: 30}}>
                    <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
                        <Text style={styles.welcome}>Go to page Test alerts</Text>
                    </View>
                </TouchableOpacity>

                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task"
                                       onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-create" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {
                    }}>
                        <Icon name="md-notifications-off" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {
                    }}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>

            </View>
        )
    },
});

class PageTest extends Component {

    constructor(props) {
        super(props)
        this.showAlert = this.showAlert.bind(this)
        this.state = {  checked:false }

    }

    _renderHeader(section) {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    }




    render() {



        return (

            <ScrollView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>

                    <SwipeableViews style={styles.slideContainer}>
                        <View style={[styles.slide, styles.slide1]}>
                            <Text style={styles.text}>
                                slide n°1
                            </Text>
                        </View>
                        <View style={[styles.slide, styles.slide2]}>
                            <Text style={styles.text}>
                                slide n°2
                            </Text>
                        </View>
                        <View style={[styles.slide, styles.slide3]}>
                            <Text style={styles.text}>
                                slide n°3
                            </Text>
                        </View>
                    </SwipeableViews>
                    <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>

                    <Accordion
                        sections={SECTIONS}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />

                    <TouchableHighlight style={[styles.button, {backgroundColor: MAIN_INFO_COLOR}]}
                                        onPress={() => this.showAlert('info')} underlayColor={'lightgray'}>
                        <Text style={styles.text}>{'info'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, {backgroundColor: MAIN_WARN_COLOR}]}
                                        onPress={() => this.showAlert('warn')} underlayColor={'lightgray'}>
                        <Text style={styles.text}>{'warn'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, {backgroundColor: MAIN_ERROR_COLOR}] }
                                        onPress={() => this.showAlert('error')} underlayColor={'lightgray'}>
                        <Text style={styles.text}>{'error'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, {backgroundColor: MAIN_CUSTOM_COLOR}]}
                                        onPress={() => this.showAlert('custom')} underlayColor={'lightgray'}>
                        <Text style={styles.text}>{'custom'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={() => this.closeAlert()}
                                        underlayColor={'lightgray'}>
                        <Text style={styles.text}>{'close alert'}</Text>
                    </TouchableHighlight>
                </ScrollView>

                <DropdownAlert
                    ref={(ref) => this.dropdown = ref}
                    titleNumOfLines={Number.MAX_SAFE_INTEGER}
                    messageNumOfLines={Number.MAX_SAFE_INTEGER}
                    closeInterval={0}
                    containerStyle={{
                        backgroundColor: MAIN_CUSTOM_COLOR,
                        margin: 20,
                        borderRadius: 8
                    }}
                    onClose={(data) => this.onClose(data)}
                    onCancel={(data) => this.onClose(data)}
                    showCancel={true}
                    imageSrc={'https://facebook.github.io/react/img/logo_og.png'}
                />


                <CheckBox
                    center
                    title='Click Here'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                />

                <CheckBox
                    center
                    title='Click Here to Remove This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.checked}
                />

                <FormLabel>Name</FormLabel>
                <FormInput />

    </ScrollView>

        );
    }

    showAlert(type) {
        switch (type) {
            case 'info':
                this.dropdown.alertWithType(type, 'Info', 'System is going down at 12 AM tonight for routine maintenance. We\'ll notify you when the system is back online.')
                break;
            case 'warn':
                this.dropdown.alertWithType(type, 'Warning', 'Your cloud drive is about to reach capacity. Please consider upgrading to premium plan.')
                break;
            case 'error':
                this.dropdown.alertWithType(type, 'Error', 'Sorry, we\'re having some technical difficulties. Our team will get this fixed for you ASAP.')
                break;
            case 'custom':
                this.dropdown.alert('Custom', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis ante a mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis ante a mauris.')
                break;
        }
    }

    closeAlert() {
        this.dropdown.onClose()
    }

    onClose(data) {
        console.log(data)
    }

}


var PageTwo = React.createClass({

    _handlePress() {
        this.props.navigator.pop();
    },
    _handlePress2(){
        this.props.navigator.push({id: 4});
    },


    render() {
        return (


            <Container theme={Theme}>

                <Header>
                    <Button transparent onPress={this._handlePress}>
                        <Icon name='ios-arrow-back'/>
                    </Button>

                    <Title>Shakman</Title>

                    <Button transparent>
                        <Icon name='ios-menu'/>
                    </Button>
                </Header>

                <Content>

                    <Tabs style={{backgroundColor: 'green'}}>
                        <TabOne tabLabel='One'/>
                        <TabTwo tabLabel='Two'/>
                    </Tabs>


                    <Button primary>
                        <Icon name='ios-home'/>
                        Press me !
                    </Button>


                    <Button success iconRight>
                        Next
                        <Icon name='ios-arrow-forward'/>
                    </Button>

                    <Button info>
                        Previous
                        <Icon name='ios-arrow-back'/>
                    </Button>
                    <Button rounded> Primary </Button>
                    <Button rounded success> Success </Button>

                    <Button block> Primary </Button>
                    <Button block success> Success </Button>



                    <Grid>
                        <Col style={{backgroundColor: '#D954D7', height: 200}}></Col>
                        <Col style={{backgroundColor: '#D93735', height: 200}}></Col>
                    </Grid>


                    <Card>
                        <CardItem header>
                            <Text>Card Header</Text>
                        </CardItem>

                        <CardItem>
                            <Text>
                                Moniem Moniem Moniem Moniem Moniem Moniem Moniem Moniem Moniem Moniem Moniem Moniem
                            </Text>
                        </CardItem>

                        <CardItem header>
                            <Text>Card Footer</Text>
                        </CardItem>
                    </Card>




                    <Spinner color='red'/>
                    <Spinner color='blue'/>

                </Content>
            </Container>




        )
    }
});


class TabOne extends Component {

    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    render() {

        return (
            <Container>
                <Content>
                    <Text>oneee</Text>

                    <Button rounded onPress={() => this.setState({open: true})}> open modal </Button>

                    <Modal
                        offset={this.state.offset}
                        open={this.state.open}
                        modalDidOpen={() => console.log('modal did open')}
                        modalDidClose={() => this.setState({open: false})}
                        style={{alignItems: 'center'}}>
                        <View>
                            <Text style={{fontSize: 20, marginBottom: 10}}>Hello world!</Text>
                            <TouchableOpacity
                                style={{margin: 5}}
                                onPress={() => this.setState({offset: -100})}>
                                <Text>Move modal up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{margin: 5}}
                                onPress={() => this.setState({offset: 0})}>
                                <Text>Reset modal position</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{margin: 5}}
                                onPress={() => this.setState({open: false})}>
                                <Text>Close modal</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </Content>
            </Container>
        );
    }
}

class TabTwo extends Component {

    render() {

        return (
            <Container>
                <Content style={{height: 500}}>
                    <Text>Twoooo</Text>
                </Content>
            </Container>
        );
    }
}

var PageThree = React.createClass({
    _handlePress() {
        this.props.navigator.pop();
    },

    render() {
        return (
            <View style={[styles.container, {backgroundColor: 'green'}]}>
                <Text style={styles.welcome}>This is Page Three!</Text>
                <TouchableOpacity onPress={this._handlePress}>
                    <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
                        <Text style={styles.welcome}>Go back</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    },
});

class ReactNativeNativeBaseSeed extends Component {
    _renderScene(route, navigator) {

        if (route.id === 1) {
            return <IntroPage navigator={navigator}/>
        }

        else if (route.id === 2) {
            return <PageOne navigator={navigator}/>

        } else if (route.id === 3) {
            return <PageTwo navigator={navigator}/>
        }
        else if (route.id === 4) {
            return <PageThree navigator={navigator}/>
        }

        else if (route.id === 5) {
            return <PageTest navigator={navigator}/>
        }
    }

    _configureScene(route) {
       // return CustomSceneConfig;
        return
    }

    render() {
        return (
            <Navigator
                initialRoute={{id: 1,}}
                renderScene={this._renderScene}
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',

    },
    dialogConatiner: {
        paddingHorizontal: 16
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    contentContainer: {
        marginTop: 22,
    },
    button: {
        backgroundColor: 'gray',
        margin: 8,
        borderRadius: 8,
        padding: 8,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    slideContainer: {
        height: 100,
    },
    slide: {
        padding: 15,
        height: 100,
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
});

AppRegistry.registerComponent('ReactNativeNativeBaseSeed', () => ReactNativeNativeBaseSeed);

module.exports = ReactNativeNativeBaseSeed;