document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "『願いを叶えるアプリ』(Case.B【消極的】)",
    "｢誠に残念ながら貴意に沿うことができませんでした。｣\n幾度となく目にした文字列を一瞥し、思わず深いため息がこぼれる。\n大学4年生、数年刻みで置き換わっていた自身を表すステータスも、\n来年からは半永久的に｢社会人｣という大層な肩書きに切り替わってしまう。",
    "そんなわけで、待ち受ける途方もない時間をせめて｢まとも｣にできるよう、学友たちと足並みそろえて就職活動というものに勤しみ始め早数か月。\n結果は、芳しくない。",
    "昔からの憧れを追い続ける奴、エリート街道を突き進む奴。\nそんな奴らを見る度、自分の足元が覚束なくなるのを感じる。\nやりたいことも、将来のために積み重ねた実績も、歩んできた人生という砂山をどれだけ掘ってみても何一つ見当たらない。\n中途半端、昔から何もかも｢ほどほど｣止まりだった。\nほどほどで積み重ねた人生経験は、ほどほどな人間を形作る。",
    "｢ままならないもんだね･･･｣\nメールアプリのタブを消去し、意味もなくSNSを開こうとしたとき、\n\n｢･･･ん？｣\nホーム画面の隅に、見慣れないアプリがあるのに気づく。",
    "無地で鈍色の四角形、\nこれといった特徴のないアイコン。\nタイトルすらない。",
    "｢なんこれ｣\n自分で入れた記憶はない、おそらくスマホ本体のデフォルトアプリか何かが意図しない操作の拍子にホーム画面に移動してしまっただけだろう。\nだがもし何らかの不具合やバグならばちょっとした話のタネくらいにはなるかもしれない。\n\nそう思い、何気なくそのアイコンに触れる。",
    "あなたの願いは？",
    "眉をひそめる。ポップアップされたのはこれまた無機質なテキスト入力ボックス。\nそして、この一文。\n意味が分からない。一瞬情報を抜き取る有害アプリかとも思ったが、にしては\n質問が抽象的すぎる。\n\n｢･････。｣",
    "『大手企業内定』\n\nほとんど無意識だった。積もり積もったストレスを少しでも発露したかったのだろう\n気づけば指がフリック入力を行っていた。",
    "｢あれ？｣\n虚しさと恥ずかしさからすぐにテキストを消そうとしたが、\nそうする間もなくテキストボックスは画面から忽然と姿を消していた。\nそもそも、思い返すと送信ボタンすらなかった。\nメールアドレスやら個人情報は一切入力しなかったわけだし、\n根拠はないが流石にこれで情報が抜き取られる、なんてことはないだろう。\nきっと何かのアンケートかなにかだ。\n\n｢･･･しょうもな｣\nスマホをポケットにしまい、アルバイトに向かうことにした",
    "｢選考の結果、貴殿を採用させていただくことが決定いたしました｣\n",
    "｢･･･は？｣\n突然のことだった。\nつい数週間前に勢いでエントリーし、緊張から面接でものの見事に何も喋られなくなってしまい撃沈した国内有数の大手企業からの採用の連絡。\n何度も読み返し、宛先を間違えたのではないかと電話で問い合わせたところ、どうやら不思議なことに、間違えていないらしい。\n｢まさか･･･｣\nスマホを起動し、あのアプリを確認する。\nある。どうやらストレスで見た幻覚ではなかったようだ。\n｢試す価値はある、かな｣\n",
    "『時給をあげてほしい』\nその翌日、店長が昇給通知を渡してきた。最低賃金すれすれだった時給が200円も上がっている。\n今まで惰性で働いていたが、これならば誠心誠意業務に臨む責任感も芽生えてくる。\n\n『論文のアイデアが欲しい』\n翌日、突如天啓のように頭の中に降ってきた発想を勢いのまままとめ上げると、\n今まで一切の期待を向けてこなかった教授が目を輝かせてべた褒めしてきた。\nどうやら、こういった内在的で抽象的な願いも叶えられるようだ。",
    "それから数週間で、色褪せて無味無臭だった人生が嘘のように豊かになった。\n一分一秒、頑張ることが楽しく、あらゆる物事に前向きに取り組めるようになった。",
    "｢止まらない貧困化、終末時計過去最短｣\nふと目に留まったニュース記事、詳しいことはよくわからないが、\nどうやら世間は年々貧しくなっており、\n世に言うエリート、成功者とされる人々ですら困窮する時代になりつつあるようだ。\n｢･･･｣",
    "これから、卒業して誰もがうらやむ大手企業に勤めたとして、\n世界がどんどん厳しく擦り減っていくなかで、順風満帆など到底難しいのではないか？\n考えても見れば、世界が｢頑張らなきゃいけない｣構造になっているのが悪いのではないか。\nアルバイトの時給も、卒業論文も、楽しく豊かに不自由なく生きるために必要ないのなら、気にする必要すらなかったじゃあないか。\n\nなら、真にかなえるべき願いは",
    "　　　『もっと楽に努力せず生きたい』　　　\n",
    "翌日、眠りから意識を取り戻す中、得も言われぬ違和感を覚えた。\n身体が動かない、そもそも体の感覚がない。\n視覚も、聴覚も、外的な刺激を何一つ感じることができないのに、意識だけはある。\n混乱、するべき状況であるはずなのに、動悸も発汗も発露できない。",
    "そのうち、どれだけの時間が過ぎたかもわからないなか、\n意識のなかに答えが浮き上がってきた。\n何不自由ないなんてことは実現しえない。\n生きることは、不自由を切り拓くために頑張ることなのだから。\n",
    "大手企業に勤める、時給をあげる。\n今までの願いはどれも｢頑張る土台をつくる｣ためのモノばかりだった。\n頑張りたいこともなく、何を頑張ればいいのかもわからない人生に、あのアプリは頑張るための導線を導いてくれていた。\nだが今回のそれは違う。\n何も頑張らない、それは、あらゆる努力からの脱却。\n",
    "働く努力、学ぶ努力、\n見る努力、食べる努力、息をする努力。",
    "それら全てから逃れ、生きる努力を一切する必要がなくなった今、\n\nこのまま、この意識だけの余生が終わるのを緩やかに待つだけになってしまった。",
    "終わり\n",

    ];

    let currentIndex = 0;
    let currentText = "";
    let charIndex = 0;
    const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSckRmDxARDje8p52OaN7SeG7St8LKGRG1gnYRKEddC96AjbJg/viewform?usp=sf_link';

    const textElement = document.getElementById("text");
    const lineLength = 100; // 自動改行する文字数

    function showText(index) {
        currentText = texts[index].replace(/\n/g, '<br>');
        currentText = insertLineBreaks(currentText, lineLength);
        charIndex = 0;
        textElement.innerHTML = ""; // Clear previous text
        typeText();
    }

    function insertLineBreaks(text, length) {
        let result = '';
        let currentLineLength = 0; // 現在の行の長さを追跡
        for (let i = 0; i < text.length; i++) {
            result += text[i];
            if (text[i] === '<' && text.slice(i, i+4) === '<br>') {
                currentLineLength = 0; // <br>タグが見つかったらカウントをリセット
            } else {
                currentLineLength++;
                if (currentLineLength >= length && text[i] !== ' ') {
                    result += '<br>';
                    currentLineLength = 0; // 改行後にカウントをリセット
                }
            }
        }
        return result;
    }

    function typeText() {
        if (charIndex < currentText.length) {
            const currentChar = currentText[charIndex];
            if (currentChar === "<") {
                const endIndex = currentText.indexOf(">", charIndex);
                textElement.innerHTML += currentText.slice(charIndex, endIndex + 1);
                charIndex = endIndex + 1;
            } else {
                textElement.innerHTML += currentChar;
                charIndex++;
            }
            setTimeout(typeText, 50);
        }
    }

    document.getElementById("content").addEventListener("click", function() {
        if (charIndex < currentText.length) {
            // Skip typing animation and show full text
            textElement.innerHTML = currentText;
            charIndex = currentText.length;
        } else {
            currentIndex++;
            if (currentIndex < texts.length) {
                showText(currentIndex);
            } else { 
                redirectToForm();
            }
        }
    });

    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (charIndex < currentText.length) {
                // Skip typing animation and show full text
                textElement.innerHTML = currentText;
                charIndex = currentText.length;
            } else {
                currentIndex++;
                if (currentIndex < texts.length) {
                    showText(currentIndex);
                } else {   
                    redirectToForm();
                }
            }
        }
    });

    function redirectToForm() {
        window.location.href = formLink;
    }

    showText(currentIndex);
});
