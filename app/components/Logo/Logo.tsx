import React, {FC} from "react";
import style from "./Logo.module.scss";
import Link from "next/link";

interface LogoProps {
    isDark?: boolean;
}

const Logo: FC<LogoProps> = ({isDark}) => {
    return (
        <Link href="/" className={`${style.logo} ${isDark && style.logo_dark}`}>
            <svg width="166" height="28" viewBox="0 0 166 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.90234 9.76953C8.76953 10.9023 8.20312 12.2695 8.20312 13.8711C8.20312 15.4727 8.76953 16.8398 9.90234 17.9727C11.0352 19.1055 12.4023 19.6719 14.0039 19.6719C15.6055 19.6719 16.9727 19.1055 18.1055 17.9727C19.2383 16.8398 19.8047 15.4727 19.8047 13.8711C19.8047 12.2695 19.2383 10.9023 18.1055 9.76953C16.9727 8.63672 15.6055 8.07031 14.0039 8.07031C12.4023 8.07031 11.0352 8.63672 9.90234 9.76953ZM7.69043 16.5371C7.3291 15.6875 7.14844 14.7988 7.14844 13.8711C7.14844 12.9434 7.3291 12.0596 7.69043 11.2197C8.05176 10.3701 8.54004 9.6377 9.15527 9.02246C9.77051 8.40723 10.498 7.91895 11.3379 7.55762C12.1875 7.19629 13.0762 7.01562 14.0039 7.01562C14.9316 7.01562 15.8154 7.19629 16.6553 7.55762C17.5049 7.91895 18.2373 8.40723 18.8525 9.02246C19.4678 9.6377 19.9561 10.3701 20.3174 11.2197C20.6787 12.0596 20.8594 12.9434 20.8594 13.8711C20.8594 14.7988 20.6787 15.6875 20.3174 16.5371C19.9561 17.377 19.4678 18.1045 18.8525 18.7197C18.2373 19.335 17.5049 19.8232 16.6553 20.1846C15.8154 20.5459 14.9316 20.7266 14.0039 20.7266C13.0762 20.7266 12.1875 20.5459 11.3379 20.1846C10.498 19.8232 9.77051 19.335 9.15527 18.7197C8.54004 18.1045 8.05176 17.377 7.69043 16.5371ZM7.14844 9.90137C6.44531 11.1123 6.09375 12.4355 6.09375 13.8711C6.09375 15.3066 6.44531 16.6299 7.14844 17.8408C7.86133 19.0518 8.82324 20.0137 10.0342 20.7266C11.2451 21.4297 12.5684 21.7812 14.0039 21.7812C15.4395 21.7812 16.7627 21.4297 17.9736 20.7266C19.1846 20.0137 20.1416 19.0518 20.8447 17.8408C21.5576 16.6299 21.9141 15.3066 21.9141 13.8711C21.9141 12.4355 21.5576 11.1123 20.8447 9.90137C20.1416 8.69043 19.1846 7.7334 17.9736 7.03027C16.7627 6.31738 15.4395 5.96094 14.0039 5.96094C12.5684 5.96094 11.2451 6.31738 10.0342 7.03027C8.82324 7.7334 7.86133 8.69043 7.14844 9.90137ZM6.24023 18.3682C5.43945 16.9912 5.03906 15.4922 5.03906 13.8711C5.03906 12.25 5.43945 10.751 6.24023 9.37402C7.04102 7.99707 8.12988 6.9082 9.50684 6.10742C10.8838 5.30664 12.3828 4.90625 14.0039 4.90625C15.625 4.90625 17.124 5.30664 18.501 6.10742C19.8779 6.9082 20.9668 7.99707 21.7676 9.37402C22.5684 10.751 22.9688 12.25 22.9688 13.8711C22.9688 15.4922 22.5684 16.9912 21.7676 18.3682C20.9668 19.7451 19.8779 20.834 18.501 21.6348C17.124 22.4355 15.625 22.8359 14.0039 22.8359C12.3828 22.8359 10.8838 22.4355 9.50684 21.6348C8.12988 20.834 7.04102 19.7451 6.24023 18.3682ZM4.77539 9.97461C4.24805 11.2148 3.98438 12.5137 3.98438 13.8711C3.98438 15.2285 4.24805 16.5273 4.77539 17.7676C5.30273 19.0078 6.01074 20.0771 6.89941 20.9756C7.79785 21.8643 8.86719 22.5723 10.1074 23.0996C11.3477 23.627 12.6465 23.8906 14.0039 23.8906C15.3613 23.8906 16.6602 23.627 17.9004 23.0996C19.1406 22.5723 20.2051 21.8643 21.0938 20.9756C21.9922 20.0771 22.7051 19.0078 23.2324 17.7676C23.7598 16.5273 24.0234 15.2285 24.0234 13.8711C24.0234 12.5137 23.7598 11.2148 23.2324 9.97461C22.7051 8.73438 21.9922 7.66992 21.0938 6.78125C20.2051 5.88281 19.1406 5.16992 17.9004 4.64258C16.6602 4.11523 15.3613 3.85156 14.0039 3.85156C12.6465 3.85156 11.3477 4.11523 10.1074 4.64258C8.86719 5.16992 7.79785 5.88281 6.89941 6.78125C6.01074 7.66992 5.30273 8.73438 4.77539 9.97461ZM4.40918 19.4229C3.42285 17.7236 2.92969 15.873 2.92969 13.8711C2.92969 11.8691 3.42285 10.0186 4.40918 8.31934C5.40527 6.62012 6.75293 5.27734 8.45215 4.29102C10.1514 3.29492 12.002 2.79688 14.0039 2.79688C16.0059 2.79688 17.8564 3.29492 19.5557 4.29102C21.2549 5.27734 22.5977 6.62012 23.584 8.31934C24.5801 10.0186 25.0781 11.8691 25.0781 13.8711C25.0781 15.873 24.5801 17.7236 23.584 19.4229C22.5977 21.1221 21.2549 22.4697 19.5557 23.4658C17.8564 24.4521 16.0059 24.9453 14.0039 24.9453C12.002 24.9453 10.1514 24.4521 8.45215 23.4658C6.75293 22.4697 5.40527 21.1221 4.40918 19.4229ZM2.82715 9.16895C2.19238 10.6631 1.875 12.2305 1.875 13.8711C1.875 15.5117 2.19238 17.084 2.82715 18.5879C3.47168 20.082 4.33594 21.3711 5.41992 22.4551C6.50391 23.5391 7.79297 24.4033 9.28711 25.0479C10.791 25.6826 12.3633 26 14.0039 26C15.6445 26 17.2119 25.6826 18.7061 25.0479C20.21 24.4033 21.5039 23.5391 22.5879 22.4551C23.6719 21.3711 24.5312 20.082 25.166 18.5879C25.8105 17.084 26.1328 15.5117 26.1328 13.8711C26.1328 12.2305 25.8105 10.6631 25.166 9.16895C24.5312 7.66504 23.6719 6.37109 22.5879 5.28711C21.5039 4.20312 20.21 3.34375 18.7061 2.70898C17.2119 2.06445 15.6445 1.74219 14.0039 1.74219C12.3633 1.74219 10.791 2.06445 9.28711 2.70898C7.79297 3.34375 6.50391 4.20312 5.41992 5.28711C4.33594 6.37109 3.47168 7.66504 2.82715 9.16895ZM1.86035 18.998C1.16699 17.3672 0.820312 15.6582 0.820312 13.8711C0.820312 12.084 1.16699 10.3799 1.86035 8.75879C2.56348 7.12793 3.50098 5.72656 4.67285 4.55469C5.85449 3.37305 7.25586 2.43555 8.87695 1.74219C10.5078 1.03906 12.2168 0.6875 14.0039 0.6875C15.791 0.6875 17.4951 1.03906 19.1162 1.74219C20.7471 2.43555 22.1484 3.37305 23.3203 4.55469C24.502 5.72656 25.4395 7.12793 26.1328 8.75879C26.8359 10.3799 27.1875 12.084 27.1875 13.8711C27.1875 15.6582 26.8359 17.3672 26.1328 18.998C25.4395 20.6191 24.502 22.0205 23.3203 23.2021C22.1484 24.374 20.7471 25.3066 19.1162 26C17.4951 26.7031 15.791 27.0547 14.0039 27.0547C12.2168 27.0547 10.5078 26.7031 8.87695 26C7.25586 25.3066 5.85449 24.374 4.67285 23.2021C3.50098 22.0205 2.56348 20.6191 1.86035 18.998ZM39.5736 12.8896L38.9438 13.8857L31.3119 1.74219H32.557L39.5736 12.8896ZM44.7738 20.8145L45.3891 19.8184L49.2855 26H48.0404L44.7738 20.8145ZM40.8188 10.9268L40.1889 11.9082L33.8021 1.74219H35.0326L40.8188 10.9268ZM46.0189 18.8369L46.6342 17.8408L51.7758 26H50.5307L46.0189 18.8369ZM42.0639 8.93457L41.4486 9.91602L36.2924 1.74219H37.5375L42.0639 8.93457ZM47.2787 16.8447L47.8939 15.8486L54.2807 26H53.0355L47.2787 16.8447ZM43.309 6.95703L42.6938 7.95312L38.7826 1.74219H40.0277L43.309 6.95703ZM48.5092 14.8672L49.1244 13.8711L56.7709 26H55.5258L48.5092 14.8672ZM54.7934 1.74219H56.0385L40.7748 26H39.5297L54.7934 1.74219ZM52.3178 1.74219H53.5482L38.2846 26H37.0395L52.3178 1.74219ZM49.8129 1.74219H51.058L35.7797 26H34.5346L49.8129 1.74219ZM47.3227 1.74219H48.5678L33.2895 26H32.0443L47.3227 1.74219ZM69.4939 13.7979L68.9666 14.9551L62.6385 1.74219H63.6932L69.4939 13.7979ZM70.5486 11.4834L70.0066 12.6406L64.7479 1.74219H65.8025L70.5486 11.4834ZM71.6033 9.18359L71.076 10.3408L66.8572 1.74219H67.9119L71.6033 9.18359ZM70.2703 17.8262L77.9021 1.74219H78.9568L71.325 17.8262V26H70.2703V17.8262ZM72.3797 17.8262L80.0115 1.74219H81.0662L73.4344 17.8262V26H72.3797V17.8262ZM74.4891 17.8262L82.1209 1.74219H83.1756L75.5438 17.8262V26H74.4891V17.8262ZM68.6883 16.7129L75.7928 1.74219H76.8475L69.2156 17.8262V26H68.1609V17.8262L60.5291 1.74219H61.5838L68.6883 16.7129ZM107.28 13.3291H108.335V26H107.28V13.3291ZM111.499 13.3291H112.554V26H111.499V13.3291ZM109.39 13.3291H110.445V26H109.39V13.3291ZM106.226 13.3291V26C104.37 26.7031 102.446 27.0547 100.454 27.0547C98.7258 27.0547 97.0705 26.7373 95.4885 26.1025C93.9064 25.4678 92.5148 24.5889 91.3137 23.4658C90.1125 22.333 89.1506 20.9365 88.4279 19.2764C87.715 17.6064 87.3586 15.8047 87.3586 13.8711C87.3586 12.084 87.7053 10.3799 88.3986 8.75879C89.1018 7.12793 90.0393 5.72656 91.2111 4.55469C92.3928 3.37305 93.7941 2.43555 95.4152 1.74219C97.0461 1.03906 98.7551 0.6875 100.542 0.6875C102.769 0.6875 104.839 1.20508 106.753 2.24023C108.667 3.27539 110.23 4.68164 111.441 6.45898L110.562 7.03027C109.448 5.39941 108.008 4.11035 106.24 3.16309C104.483 2.21582 102.583 1.74219 100.542 1.74219C98.9016 1.74219 97.3293 2.06445 95.8254 2.70898C94.3313 3.34375 93.0422 4.20312 91.9582 5.28711C90.8742 6.37109 90.01 7.66504 89.3654 9.16895C88.7307 10.6631 88.4133 12.2305 88.4133 13.8711C88.4133 15.6387 88.7404 17.2891 89.3947 18.8223C90.0588 20.3555 90.9377 21.6396 92.0314 22.6748C93.135 23.71 94.4143 24.5254 95.8693 25.1211C97.3244 25.707 98.8381 26 100.41 26C102.061 26 103.648 25.7412 105.171 25.2236V24.2129C103.716 24.7012 102.188 24.9453 100.586 24.9453C99.424 24.9453 98.2912 24.7842 97.1877 24.4619C96.0939 24.1299 95.0783 23.6465 94.1408 23.0117C93.2131 22.3672 92.3977 21.6055 91.6945 20.7266C91.0012 19.8379 90.4543 18.8076 90.0539 17.6357C89.6633 16.4541 89.468 15.1992 89.468 13.8711C89.468 11.8691 89.9611 10.0186 90.9475 8.31934C91.9436 6.62012 93.2912 5.27734 94.9904 4.29102C96.6897 3.29492 98.5402 2.79688 100.542 2.79688C102.417 2.79688 104.16 3.23633 105.772 4.11523C107.383 4.98437 108.696 6.16602 109.712 7.66016L108.833 8.23145C107.915 6.88379 106.724 5.81934 105.259 5.03809C103.804 4.24707 102.232 3.85156 100.542 3.85156C99.1848 3.85156 97.8859 4.11523 96.6457 4.64258C95.4055 5.16992 94.3361 5.88281 93.4377 6.78125C92.549 7.66992 91.841 8.73438 91.3137 9.97461C90.7863 11.2148 90.5227 12.5137 90.5227 13.8711C90.5227 15.0918 90.6984 16.2393 91.05 17.3135C91.4113 18.3779 91.9045 19.3105 92.5295 20.1113C93.1643 20.9023 93.9016 21.5859 94.7414 22.1621C95.5813 22.7285 96.4943 23.1582 97.4807 23.4512C98.4768 23.7441 99.4973 23.8906 100.542 23.8906C102.163 23.8906 103.706 23.6172 105.171 23.0703V22.0156C103.726 22.5723 102.217 22.8506 100.645 22.8506C99.4533 22.8506 98.3156 22.6504 97.2316 22.25C96.1477 21.8398 95.1809 21.2637 94.3313 20.5215C93.4914 19.7793 92.8225 18.832 92.3244 17.6797C91.8264 16.5273 91.5773 15.2578 91.5773 13.8711C91.5773 12.25 91.9777 10.751 92.7785 9.37402C93.5793 7.99707 94.6682 6.9082 96.0451 6.10742C97.4221 5.30664 98.9211 4.90625 100.542 4.90625C102.056 4.90625 103.462 5.25781 104.761 5.96094C106.07 6.66406 107.134 7.62109 107.954 8.83203L107.075 9.40332C106.353 8.34863 105.415 7.51367 104.263 6.89844C103.12 6.27344 101.88 5.96094 100.542 5.96094C99.1066 5.96094 97.7834 6.31738 96.5725 7.03027C95.3615 7.7334 94.3996 8.69043 93.6867 9.90137C92.9836 11.1123 92.632 12.4355 92.632 13.8711C92.632 14.8672 92.7736 15.7949 93.0568 16.6543C93.34 17.5137 93.7307 18.2559 94.2287 18.8809C94.7268 19.5059 95.3078 20.0381 95.9719 20.4775C96.6457 20.917 97.3684 21.249 98.1398 21.4736C98.9113 21.6885 99.7121 21.7959 100.542 21.7959C102.193 21.7959 103.736 21.4688 105.171 20.8145V19.8037C103.784 20.4189 102.285 20.7266 100.674 20.7266C99.7463 20.7266 98.8723 20.585 98.052 20.3018C97.2316 20.0186 96.4895 19.6035 95.8254 19.0566C95.1711 18.5098 94.6486 17.792 94.258 16.9033C93.8772 16.0049 93.6867 14.9941 93.6867 13.8711C93.6867 12.9434 93.8674 12.0596 94.2287 11.2197C94.59 10.3701 95.0783 9.6377 95.6936 9.02246C96.3088 8.40723 97.0363 7.91895 97.8762 7.55762C98.7258 7.19629 99.6145 7.01562 100.542 7.01562C101.704 7.01562 102.783 7.28906 103.779 7.83594C104.776 8.37305 105.586 9.10547 106.211 10.0332L105.347 10.6045C104.82 9.82324 104.131 9.20801 103.281 8.75879C102.442 8.2998 101.529 8.07031 100.542 8.07031C98.9406 8.07031 97.5734 8.63672 96.4406 9.76953C95.3078 10.9023 94.7414 12.2695 94.7414 13.8711C94.7414 14.8574 94.9025 15.7314 95.2248 16.4932C95.5471 17.2451 95.9865 17.8506 96.5432 18.3096C97.1096 18.7588 97.7346 19.1006 98.4182 19.335C99.1115 19.5596 99.8537 19.6719 100.645 19.6719C102.266 19.6719 103.775 19.335 105.171 18.6611V13.3291H106.226ZM123.27 26H122.215V1.74219H123.27V26ZM121.161 26H120.106V1.74219H121.161V26ZM119.051 26H117.997V1.74219H119.051V26ZM125.379 20.7266H136.6V21.7812H125.379V22.8359H136.6V23.8906H125.379V24.9453H136.6V26H124.325V1.74219H136.6V2.79688H125.379V3.85156H136.6V4.90625H125.379V5.96094H136.6V7.01562H125.379V11.2344H131.136V12.2891H125.379V13.3438H131.136V14.3984H125.379V15.4531H131.136V16.5078H125.379V20.7266ZM159.284 14.3252L158.229 12.582V1.74219H159.284V14.3252ZM161.394 17.7822L160.339 16.0098V1.74219H161.394V17.7822ZM163.503 21.2832L162.448 19.4961V1.74219H163.503V21.2832ZM148.386 13.417L149.44 15.1602V26H148.386V13.417ZM146.276 9.95996L147.331 11.7324V26H146.276V9.95996ZM144.167 6.45898L145.222 8.24609V26H144.167V6.45898ZM144.533 1.74219H145.764L160.676 26H159.445L144.533 1.74219ZM147.023 1.74219H148.269L163.166 26H161.906L147.023 1.74219ZM149.499 1.74219H150.729L164.558 24.2861V1.74219H165.612V26C165.612 26 165.197 26 164.367 26L149.499 1.74219ZM143.112 3.45605V26H142.058V1.74219C142.058 1.74219 142.478 1.74219 143.317 1.74219L158.186 26H156.97L143.112 3.45605Z"/>
            </svg>
        </Link>
    );
}

export default Logo;