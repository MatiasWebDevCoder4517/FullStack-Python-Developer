window.onload = () => {
    let darkMode = false; // 0 = light; 1 = dark
    const modeBtn = document.getElementById('mode-btn');
    const boxes = document.getElementsByClassName('box')

    const changeBoxesModes = (boxes, color) =>{
        style = '3px solid ' + color;
        for(const box of boxes){
            box.style.border = style;
            // box.style.color = '#fff';
        }
    }
    const handleModeClick = () => {
        const container = document.getElementById('periodic-table-container');
        darkMode = !darkMode;
        if (darkMode){
            // change css to dakr mode
            container.style.background = 'rgb(36, 36, 36)';
            // modeBtn.style.background = 'gray';
            modeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            changeBoxesModes(boxes, 'rgb(36, 36, 36)');

        } else {
            container.style.background = '#fff';
            // modeBtn.style.background = 'rgb(243, 243, 243)';
            modeBtn.innerHTML = '<i class="fas fa-moon""></i>';
            changeBoxesModes(boxes, '#fff');
            // change to light mode
        }
    }
    modeBtn.onclick = handleModeClick;
};