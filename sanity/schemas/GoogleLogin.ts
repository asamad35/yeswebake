import { defineType, defineField } from "sanity";

export default defineType({
    name: 'googleuser',
    type: 'document',
    title: 'googleUser',
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
            name: 'userImage',
            type: 'image',
            title: 'User image'
        },

        {
            name: 'expiry',
            type: 'datetime',
            title: ' Expiry of token'
        },
        {
            name: 'isAdmin',
            type: 'boolean',
            title: 'Is Admin'
        },

    ]
})