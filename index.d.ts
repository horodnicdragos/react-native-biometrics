declare module 'react-native-biometrics' {
  /**
   * Enum for touch id sensor type
   */
  const TouchID: string;
  /**
   * Enum for face id sensor type
   */
  const FaceID: string;
  /**
   * Returns promise that resolves to null, TouchID, or FaceID
   * @returns {Promise} Promise that resolves to null, TouchID, or FaceID
   */
  function isSensorAvailable(): Promise<string>;
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
   * @returns {Promise}  Promise that resolves to newly generated public key
   */
  function createKeys(
    title: string,
    cancelButtonText: string,
    messageText: string,
    hintText: string,
    recognizedText: string,
    notRecognizedText: string): Promise<string>;
   /**
   * Returns promise that resolves to true or false indicating if the keys
   * were properly deleted
   * @returns {Promise} Promise that resolves to true or false
   */
  function deleteKeys(): Promise<boolean>;
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
  function createSignature(
    title: string,
    cancelButtonText: string,
    messageText: string,
    hintText: string,
    recognizedText: string,
    notRecognizedText: string,
    payload: string
    ): Promise<string>;
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
  function simplePrompt(
    title: string,
    cancelButtonText: string,
    messageText: string,
    hintText: string,
    recognizedText: string,
    notRecognizedText: string,
  ): Promise<boolean>;
}
