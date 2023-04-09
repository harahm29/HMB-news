export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
        >
            <linearGradient
                id="eo9Iz~gJX5QQxF9vIcujya"
                x1="41.018"
                x2="45.176"
                y1="26"
                y2="26"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#3537b0" />
                <stop offset="1" stopColor="#4646cf" />
            </linearGradient>
            <path
                fill="url(#eo9Iz~gJX5QQxF9vIcujya)"
                d="M43,11h-3v30h3c1.105,0,2-0.895,2-2V13C45,11.895,44.105,11,43,11z"
            />
            <path
                fill="#5286ff"
                d="M41,39V9c0-1.105-0.895-2-2-2H5C3.895,7,3,7.895,3,9v30c0,1.105,0.895,2,2,2h38	C41.895,41,41,40.105,41,39z"
            />
            <path
                fill="#fff"
                d="M37,17H7c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h30c0.552,0,1,0.448,1,1v2	C38,16.552,37.552,17,37,17z"
            />
            <path
                fill="#fff"
                d="M19,36H7c-0.552,0-1-0.448-1-1V22c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v13	C20,35.552,19.552,36,19,36z"
            />
            <path
                fill="#fff"
                d="M38,24H24v-2c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1V24z"
            />
            <rect width="14" height="3" x="24" y="24" fill="#e6eeff" />
            <rect width="14" height="3" x="24" y="27" fill="#ccdcff" />
            <rect width="14" height="3" x="24" y="30" fill="#b3cbff" />
            <path
                fill="#9abaff"
                d="M37,36H25c-0.552,0-1-0.448-1-1v-2h14v2C38,35.552,37.552,36,37,36z"
            />
        </svg>
    );
}
