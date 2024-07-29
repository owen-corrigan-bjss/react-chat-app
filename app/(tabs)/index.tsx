import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  FlatList
} from 'react-native';
import React from 'react';


export default function HomeScreen() {
  const [userMessage, onChangeMessage] = React.useState('');
  const [messageChain, updateMessageChain] = React.useState(Array<message>);

  type message = {
    message: string,
    sender: string,
  }

  const messageSubmitted = (userMessageSubmitted: string) => {
    if (userMessageSubmitted) {
      updateMessageChain([...messageChain, { message: userMessageSubmitted, sender: 'user' }])
      onChangeMessage('')
    }
  }

  return (
    <SafeAreaView>
      <View>
        {messageChain.map((message: message) => {
          return <Text
            style={
              message.sender === 'user'
                ? styles.user
                : styles.receiver
            }>
            {message.message}
          </Text>
        })}
      </View>
      <TextInput
        onChangeText={onChangeMessage}
        placeholder='Enter message here'
        onSubmitEditing={() => {
          messageSubmitted(userMessage)
        }}
        value={userMessage}
        style={styles.input}
        keyboardAppearance='dark'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  user: {},
  receiver: {}
});
