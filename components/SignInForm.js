import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Feather } from "@expo/vector-icons";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { ActivityIndicator, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { signIn } from "../utils/actions/authActions";
import colors from "../constants/colors";

const isTestMode = true;

const initialState = {
  inputValues: {
    email: isTestMode ? "zlf@ex.com" : "",
    password: isTestMode ? "123456" : "",
  },
  inputValidities: {
    email: isTestMode,
    password: isTestMode,
  },
  formIsValid: isTestMode,
};

const SignInForm = (props) => {
  const dispatch = useDispatch();

  const [error, setError] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const authHandler = useCallback(async () => {
    try {
      setIsLoading(true);

      const action = signIn(
        formState.inputValues.email,
        formState.inputValues.password
      );
      setError(null);
      await dispatch(action);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, [dispatch, formState]);

  return (
    <>
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        autoCapitalize="none"
        keyboardType="email-address"
        errorText={formState.inputValidities["email"]}
        initialValue={formState.inputValues.email}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        autoCapitalize="none"
        secureTextEntry
        errorText={formState.inputValidities["password"]}
        initialValue={formState.inputValues.password}
      />

      {isLoading ? (
        <ActivityIndicator
          size={"small"}
          color={colors.primary}
          style={{ marginTop: 10 }}
        />
      ) : (
        <SubmitButton
          title="Sign in"
          onPress={authHandler}
          style={{ marginTop: 20 }}
          disabled={!formState.formIsValid}
        />
      )}
    </>
  );
};

export default SignInForm;
