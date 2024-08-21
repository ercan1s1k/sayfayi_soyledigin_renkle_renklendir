 const colorMap = {
            'kırmızı': 'red',
            'mavi': 'blue',
            'yeşil': 'green',
            'sarı': 'yellow',
            'turuncu': 'orange',
            'mor': 'purple',
            'pembe': 'pink',
            'kahverengi': 'brown',
            'siyah': 'black',
            'beyaz': 'white',
            'gri': 'gray',
            'lacivert': 'navy',
            'açık mavi': '#ADD8E6',
            'koyu yeşil': '#006400',
            'altın': 'gold',
            'gümüş': 'silver',
            'bej': 'beige',
            'bordo': '#800000',
            'fuşya': 'fuchsia',
            'turkuaz': 'turquoise',
            'açık yeşil': '#90EE90',
            'koyu mavi': '#00008B',
            'açık sarı': '#FFFFE0',
            'koyu kırmızı': '#8B0000',
            'açık pembe': '#FFB6C1',
            'koyu mor': '#4B0082',
            'açık kahverengi': '#D2B48C',
            'koyu gri': '#A9A9A9',
            'açık gri': '#D3D3D3',
            'zeytin yeşili': '#808000',
            'şeftali': '#FFDAB9',
            'lavanta': '#E6E6FA',
            'mint yeşili': '#98FF98',
            'krem': '#FFFDD0',
            'şarap rengi': '#722F37',
            'hardal': '#FFDB58',
            'koyu turuncu': '#FF8C00',
            'açık turuncu': '#FFA07A',
            'koyu pembe': '#FF1493',
            'açık mor': '#D8BFD8',
            'koyu sarı': '#FFD700'
        };
		
		document.getElementById('mikrofonIzniBilgi').addEventListener('click', function() {
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
                alert('Mobil cihazınızda mikrofon izni vermek için:\n\n1. Ayarlar uygulamasını açın.\n2. Güvenlik ve gizlilik bölümüne gidin.\n3. Gizlilik denetimleri altında Mikrofon erişimini açın.');
            } else {
                alert('Bilgisayarınızda mikrofon izni vermek için:\n\n1. Tarayıcınızın sağ üst köşesindeki üç nokta veya üç çizgi simgesine tıklayın.\n2. "Ayarlar"ı seçin.\n3. "Gizlilik ve Güvenlik" bölümüne gidin.\n4. "Site Ayarları"nı seçin.\n5. "Mikrofon" seçeneğine tıklayın ve mikrofon izni vermek istediğiniz siteyi bulun.');
            }
        });
		
        function startRecognition() {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = 'tr-TR';
            recognition.start();

            recognition.onresult = function(event) {
                const color = event.results[0][0].transcript.toLowerCase();
                if (colorMap[color]) {
                    document.body.style.backgroundColor = colorMap[color];
                } else {
                    alert('Geçersiz renk adı. Lütfen başka bir renk söyleyin.');
                }
            };

            recognition.onerror = function(event) {
                console.error('Hata:', event.error);
            };
        }
