/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var BookList = require('./BookList');

var {
    StyleSheet,
    NavigatorIOS,
    Component
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Featured Books',
            component: BookList
        }}/>
        );
    }
}

module.exports = Featured;