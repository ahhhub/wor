// 显示点击反馈
        function showFeedback() {
            const feedback = document.getElementById('feedback');
            feedback.style.display = 'block'; // 显示反馈信息
            setTimeout(() => {
                feedback.style.display = 'none'; // 2秒后隐藏反馈信息
            }, 2000);
        }

        // 背景音乐控制
        const music = document.getElementById('bg-music');
        let isPlaying = false;

        function toggleMusic() {
            if (isPlaying) {
                music.pause();
            } else {
                music.play();
            }
            isPlaying = !isPlaying;
        }
        // 监听全局点击事件
        document.body.addEventListener('click', (e) => {
            // 获取点击位置
            const x = e.clientX;
            const y = e.clientY;

            // 创建反馈元素
            const feedback = document.createElement('div');
            feedback.classList.add('click-feedback');
            feedback.style.left = `${x - 50}px`; // 图片居中
            feedback.style.top = `${y - 50}px`;

            // 添加到页面
            document.body.appendChild(feedback);

            // 动画结束后移除元素
            feedback.addEventListener('animationend', () => {
                feedback.remove();
            });
        });