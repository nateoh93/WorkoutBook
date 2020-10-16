export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`,
    })
);

export const fetchAllUsers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
);

export const updateUser = (user) => {
    // debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: user,
        contentType: false,
        processData: false
    })
}