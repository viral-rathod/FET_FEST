export const AppConfig = {
    api: {
        auth: {
            sign_up: 'auth/sign_up',
            sign_in: 'auth/sign_in',
        },
        school: {
            findAll: 'school/findAll',
        },
        student: {
            findAll: 'student/findAll',
            add: 'student/add',
            update: 'student/update',
            delete: 'student/delete'
        }
    },
    messages: {
        success: {
            register: 'Your account is created successfully.',
            add: 'Add Record Successfully.',
            update: 'Update Record Successfully.',
            delete: 'Delete Record Successfully.'
        },
        validation: {
            required: 'This field is require.'
        }

    }
}