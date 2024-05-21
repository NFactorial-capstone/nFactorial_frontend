import {View, Image, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import themeColors from '../../../../assets/styles/themeColors';

const PostContainer = ({name, title ,detail})=>{
    return(
        <TouchableOpacity>
            <View style={styles.outerContainer}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <Text style={styles.textDetail}>{detail}</Text>
                    <Text style={styles.textBottomDetail}>{name}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: themeColors.white0,
        marginVertical: 10,
        height: 150,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: themeColors.navy0,
        justifyContent: 'space-between', // 요소들을 컨테이너의 상단, 중간, 하단에 배치
        padding: 10  // 컨테이너 내부에 여백을 추가
    },
    textTitle: {
        fontSize: 20,
        marginHorizontal: 7,
        marginVertical: 5
    },
    textDetail: {
        fontSize: 15, // 오타 수정: 'fontsize'를 'fontSize'로
        marginHorizontal: 7,
        marginVertical: 5
    },
    textBottomDetail: {
        fontSize: 15, // 오타 수정: 'fontsize'를 'fontSize'로
        marginHorizontal: 7,
        marginVertical: 5
    }
});



export default PostContainer;