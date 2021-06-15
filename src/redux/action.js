import axios from 'axios'
import Swal from 'sweetalert2'

// export const onLoginUser = (USERNAME, PASSWORD) => {
//     return (dispatch) => {

//         axios.get(
//             'endpoint_login', {
//             params: {
//                 username: USERNAME,
//                 password: PASSWORD
//             }
//         }
//         ).then((res) => {
//             if (res.data.length === 0) {
//                 console.log('User tidak ditemukan');
//             } else {
//                 if (res.data.status == '404' || res.data.status == '401') {
//                     Swal.fire('Login failed !', 'Tidak berhasil login', 'error')
//                 } else if (res.data.status == '200') {
//                     Swal.fire('Login success !', 'Berhasil login', 'success')
//                 }

//                 console.log(res.data.result);

//                 let {
//                     id, username, password, role
//                 } = res.data.result[0]

//                 localStorage.setItem(
//                     'userData',
//                     JSON.stringify({
//                         id, username, password, role
//                     })
//                 )

//                 // Meyimpan / mengirim data di redux state
//                 dispatch(
//                     {
//                         type: 'LOGIN_SUCCESS',
//                         payload: {
//                             id,
//                             username,
//                             password,
//                             role
//                         }
//                     }
//                 )
//             }
//         })

//     }

// }
export const onLogoutUser = () => {
    // Menghapus data di local storage
    localStorage.removeItem('userData')

    // Menghapus data di redux, tidak memerlukan payload
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

// export const keepLogin = (userStorage) => {
//     return {
//         type: 'LOGIN_SUCCESS',
//         payload: userStorage
//     }
// }

export const filterMenu = (keyword) => {
    return {
        type: 'SEARCH_SUCCESS',
        payload: {
            keyword: keyword
        }
    }
}