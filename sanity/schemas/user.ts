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
            hidden: ({ parent, value }) => parent?.isThirdParty,
            validation: Rule => Rule.required()
        },
        {
            name: 'userImage',
            type: 'image',
            hidden: ({ parent, value }) => parent?.isThirdParty,
            title: 'User image'
        },
        {
            name: 'isAdmin',
            type: 'boolean',
            title: 'Is Admin'
        },
        {
            name: 'isThirdParty',
            type: 'boolean',
            title: 'Is Third Party'
        },
        {
            name: 'forgotPasswordToken',
            type: 'string',
            title: 'Forgot Password Token',
            hidden: ({ parent, value }) => parent?.isThirdParty,

        },
        {
            name: 'forgotPasswordExpiry',
            type: 'number',
            title: 'Forgot Password Expiry',
            hidden: ({ parent, value }) => parent?.isThirdParty,

        },
        {
            name: 'thirdPartyUserImage',
            type: 'string',
            title: 'Third party user image'
        },
    ]
})