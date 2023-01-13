import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import React from 'react'
import * as yup from 'yup'

const ContactForm = () => {

    const add = (values) => {
        console.log('VALUES ', values);
    }


    const registerValidationSchema = yup.object().shape({
        email: yup.string()
            .email("Please enter email valid!")
            .required('Email is required'),


    })

    return (
        <Formik
            validationSchema={registerValidationSchema}
            initialValues={{ email: '', name: '', surname: '' }}
            onSubmit={add}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('email')}
                        value={values.email}
                        placeholder='Email'
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                    />
                    {errors.email && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
                    <TextInput
                        onChangeText={handleChange('name')}
                        value={values.name}
                        placeholder='Name'
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                    />

                    <TextInput
                        onChangeText={handleChange('surname')}
                        value={values.surname}
                        placeholder='Surname'
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    )
}

export default ContactForm