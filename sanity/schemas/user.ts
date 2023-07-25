import { defineType, defineField } from "sanity";

export default defineType({
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'password',
            type: 'string',
            title: 'Password'
        },
        {
            name: 'userImage',
            type: 'image',
            title: 'User image'
        }
    ]
})