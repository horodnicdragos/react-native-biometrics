
import { NativeModules } from 'react-native'

const { ReactNativeBiometrics } = NativeModules

export default {
  /**
   * Enum for touch id sensor type
   */
  TouchID: 'TouchID',
  /**
   * Enum for face id sensor type
   */
  FaceID: 'FaceID',
  /**
   * Returns promise that resolves to null, TouchID, or FaceID
   * @returns {Promise} Promise that resolves to null, TouchID, or FaceID
   */
  isSensorAvailable: () => {
    return ReactNativeBiometrics.isSensorAvailable()
  },
  /**
   * Prompts user with biometrics dialog using the passed in prompt message if
   * it is provided, returns promise that resolves to the public key of the
   * newly generated key pair
   * @param {string} title
   * @param {string} cancelButtonText
   * @param {string} messageText
   * @param {string} hintText
   * @param {string} recognizedText
   * @param {string} notRecognizedText
   * @param {string} payload
   * @returns {Promise}  Promise that resolves to newly generated public key
   */
  createKeys: (title, cancelButtonText, messageText, hintText, recognizedText, notRecognizedText, payload) => {
    return ReactNativeBiometrics.createKeys(title, cancelButtonText, messageText, hintText, recognizedText, notRecognizedText, payload)
  },
  /**
   * Returns promise that resolves to true or false indicating if the keys
   * were properly deleted
   * @returns {Promise} Promise that resolves to true or false
   */
  deleteKeys: () => {
    return ReactNativeBiometrics.deleteKeys()
  },
  /**
   * Prompts user with biometrics dialog using the passed in prompt message and
   * returns promise that resolves to a cryptographic signature of the payload
   * @param {string} title
   * @param {string} cancelButtonText
   * @param {string} messageText
   * @param {string} hintText
   * @param {string} recognizedText
   * @param {string} notRecognizedText
   * @param {string} payload
   * @returns {Promise}  Promise that resolves to cryptographic signature
   */
  createSignature: (title, cancelButtonText, messageText, hintText, recognizedText, notRecognizedText, payload) => {
    return ReactNativeBiometrics.createSignature(title, cancelButtonText, messageText, hintText, recognizedText, notRecognizedText, payload)
  },
  /**
   * Prompts user with biometrics dialog using the passed in prompt resources and
   * returns promise that resolves if the user passes, and
   * rejects if the user fails or cancels
   * @param {string} title
   * @param {string} cancelButtonText
   * @param {string} messageText
   * @param {string} hintText
   * @param {string} recognizedText
   * @param {string} notRecognizedText
   * @returns {Promise}  Promise that resolves if the user passes, and
   * rejects if the user fails or cancels
   */
  simplePrompt: (title, cancelButtonText, messageText, hintText, recognizedText, notRecognizedText) => {
    return ReactNativeBiometrics.simplePrompt(title, cancelButtonText, messageText, hintText, recognizedText, notRecognizedText)
  }
}
