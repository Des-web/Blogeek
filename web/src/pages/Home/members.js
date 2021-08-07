import React from 'react';

function Member({ src, name }) {
    return (
        <div class='member'>
            <img class="member-pic" src={src} alt="Foto de perfil do membro" width="150px" height="150px" />
            <p class="member-name">{name}</p>
        </div>
    );
}

export default Member;