import React from 'react';

function Member({ src, name, description}) {
    return (
        <div class='member'>
            <img class="member-img" src={src} alt="Foto de perfil do membro" width="120px" height="120px" />
            <div class="member-info">
                <h3 class="member-name">{name}</h3>
                <p class="member-desc">{description}</p>
            </div>
        </div>
    );
}

export default Member;