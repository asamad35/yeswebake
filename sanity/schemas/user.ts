import { defineType, defineField } from "sanity";

export default defineType({
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'username',
            type: 'string',
            title: 'Name',
            validation: Rule => Rule.required()
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: Rule => Rule.required()
        },
        {
            name: 'password',
            type: 'string',
            title: 'Password',
            validation: Rule => Rule.required()
        },
        {
            name: 'userImage',
            type: 'image',
            title: 'User image'
        },
        {
            name: 'isAdmin',
            type: 'boolean',
            title: 'Is Admin'
        },
        {
            name: 'forgotPasswordToken',
            type: 'string',
            title: 'Forgot Password Token'
        },
        {
            name: 'forgotPasswordExpiry',
            type: 'number',
            title: 'Forgot Password Expiry'
        },
    ]
})