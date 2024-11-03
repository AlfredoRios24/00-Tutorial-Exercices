/*/ ------------------------------------------------------------
import {react} from 'react'

// Sintaxis JSX
<div id="content">
    <p>Hola mundo!!</p>
</div>

// -----------se puede usar el create.Element (saber porque)-------------------------------------------------

// Sintaxis JavaScript Vanilla
React.createElement(
    'div',
    {id: 'content'},
    React.createElement(
        'p',
        null,
        'Hola mundo!!'
    )
);

/*/