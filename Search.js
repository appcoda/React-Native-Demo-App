/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var SearchBooks = require('./SearchBooks');

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

class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Search Books',
            component: SearchBooks
        }}/>
        );
    }
}

module.exports = Search;