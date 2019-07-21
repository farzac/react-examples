import React from 'react';

export default props => {
    return (
        <div>
            <table>
                <tr>
                    <td colSpan="2">
                        <h2>Login</h2>
                    </td>
                </tr>
                <tr>
                    <td>User Name</td>
                    <td><input type='text' /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type='password' /></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button>submit</button>
                    </td>
                </tr>    
            </table>
        </div>
    )
}