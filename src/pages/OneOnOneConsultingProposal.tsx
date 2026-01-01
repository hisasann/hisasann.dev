import { useState, useEffect } from 'react';
import '../OneOnOneConsultingProposal.css';

function OneOnOneConsultingProposal() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: 'note', url: 'https://note.com/hisasann' },
    { name: '1on1 Consulting', url: '/1on1_consulting_proposal' },
    { name: 'GitHub', url: 'https://github.com/hisasann' },
    { name: 'X', url: 'https://x.com/hisasann' },
    { name: 'Instagram', url: 'https://www.instagram.com/hisasann' },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <a href="/" className="logo">
            hisasann.dev
          </a>
          <nav className="nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle color scheme"
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </nav>
        </div>
      </header>

      <main className="consulting-main">
        <div className="consulting-container">
          <header className="consulting-header">
            <h1>1on1を通じた組織開発・<br />エンジニアリングチーム強化支援</h1>
            <p className="subtitle">1on1で、チームの可能性を最大化する</p>
          </header>

          <div className="profile-section">
            <div className="profile-image">
              <img src="/assets/profile.png" alt="プロフィール写真" />
            </div>
            <div className="profile-text">
              <p>試行錯誤を重ねながら、実際のマネジメント現場で1on1のスタイルを確立してきました。</p>
              <p>1on1を通じて、組織の可能性を最大化し、メンバー一人ひとりの成長を支援します。</p>
            </div>
          </div>

          <section>
            <p>形骸化した1on1が、メンバーの成長を阻害していませんか？<br />
            本質を突いた1on1は、チームのパフォーマンスを飛躍的に向上させます。</p>
          </section>

          <section>
            <h2>こんな課題を抱えていませんか？</h2>
            <ul>
              <li><strong>1on1が形だけになっている</strong> - 毎回同じような進捗確認で終わってしまう</li>
              <li><strong>メンバーが本音を話してくれない</strong> - 表面的な会話に終始し、本当の課題が見えない</li>
              <li><strong>退職の兆候を見逃してしまう</strong> - 気づいたときには手遅れになっている</li>
              <li><strong>マネージャーが1on1に苦手意識を持っている</strong> - やり方がわからず、負担に感じている</li>
              <li><strong>チーム内のコンフリクトに気づけない</strong> - 人間関係の問題が水面下で進行している</li>
            </ul>
          </section>

          <section>
            <h2>1on1の本質とは</h2>
            <p>1on1には二つの目的があります。</p>

            <div className="two-column">
              <div>
                <h3>1. メンバーのための時間</h3>
                <ul>
                  <li>健全性の確認と悩みの解消</li>
                  <li>目標設定とキャリア支援</li>
                  <li>フィードバックとコーチング</li>
                  <li>人生レベルのゴールに寄り添う</li>
                </ul>
              </div>
              <div>
                <h3>2. 組織のための時間</h3>
                <ul>
                  <li>パフォーマンス低下の早期検知</li>
                  <li>コンフリクトの解消</li>
                  <li>退職の兆候検知と対応</li>
                  <li>適切な仕事量のチューニング</li>
                </ul>
              </div>
            </div>

            <div className="highlight-box">
              <p><strong>退職の兆候やコンフリクトの検知は、1on1でしか拾えないことが多い。</strong><br />
              これは、日常のミーティングでは決して出てこない、1on1だからこそ聞ける本音なのです。</p>
            </div>
          </section>

          <section>
            <h2>私が提供できる価値</h2>
            <h3>実践に基づいた1on1の技法と哲学</h3>
            <p>私は試行錯誤を重ねながら、実際のマネジメント現場で1on1のスタイルを確立してきました。以下のような実践的な知見を提供できます。</p>

            <h4>場の設計</h4>
            <ul>
              <li><strong>ドキュメント画面共有</strong> - 認識のズレをなくし、長期的な信頼関係を構築</li>
              <li><strong>顔出しの重要性</strong> - リモートでも関係性を深める技術</li>
              <li><strong>最適な頻度設定</strong> - パーソナライズされた1on1の設計</li>
            </ul>

            <h4>関係構築の技術</h4>
            <ul>
              <li><strong>傾聴のバランス</strong> - 「傾聴しすぎない」という逆説的アプローチ</li>
              <li><strong>雑談の活用</strong> - どんな話も面白いと捉える姿勢</li>
              <li><strong>信頼関係構築</strong> - 陰で褒める技術と心理学的裏付け</li>
            </ul>

            <h4>コーチング・フィードバック</h4>
            <ul>
              <li><strong>応援するスタンス</strong> - 相手を変えようとしない姿勢</li>
              <li><strong>可能性を引き出す</strong> - セルフイメージの書き換え</li>
              <li><strong>適切なフィードバック</strong> - タイミングとサイズ感の設計</li>
              <li><strong>問題の捉え方</strong> - 問題の機能を理解する視点</li>
            </ul>
          </section>

          <section>
            <h2>提供サービス</h2>

            <div className="service-section">
              <h3>1. マネージャー向け1on1講習（60分×2回）</h3>

              <h4>第1回：1on1の土台を作る</h4>
              <ul>
                <li>1on1の目的理解</li>
                <li>傾聴の技術</li>
                <li>ドキュメント活用法</li>
                <li>信頼関係構築の実践</li>
                <li>雑談の重要性</li>
              </ul>

              <h4>第2回：1on1で何をするか</h4>
              <ul>
                <li>信頼関係の深め方</li>
                <li>コーチングの実践</li>
                <li>フィードバックの技術</li>
                <li>問題への向き合い方</li>
              </ul>

              <p><strong>形式：</strong> オンライン/対面 いずれも対応可能<br />
              <strong>対象：</strong> 5名〜30名程度のマネージャー/リーダー層</p>
            </div>

            <div className="service-section">
              <h3>2. 組織診断・1on1文化の構築支援</h3>

              <h4>実施内容：</h4>
              <ul>
                <li>現状の1on1運用のヒアリングと課題抽出</li>
                <li>組織に合わせた1on1フレームワークの設計</li>
                <li>マネージャー層への導入支援</li>
                <li>定着までの継続的なフォローアップ</li>
              </ul>

              <p><strong>期間：</strong> 3ヶ月〜6ヶ月<br />
              <strong>対象：</strong> エンジニアリング組織、スタートアップ、成長企業</p>
            </div>

            <div className="service-section">
              <h3>3. 個別コンサルティング・メンタリング</h3>

              <h4>実施内容：</h4>
              <ul>
                <li>マネージャー個人の1on1スキル向上支援</li>
                <li>具体的なケースへのアドバイス</li>
                <li>ロールプレイとフィードバック</li>
              </ul>

              <p><strong>形式：</strong> 月1〜2回の定期セッション<br />
              <strong>期間：</strong> 応相談</p>
            </div>
          </section>

          <section>
            <h2>こんな組織におすすめです</h2>

            <h3>エンジニアリング組織</h3>
            <ul>
              <li>技術的な話題と人間関係のバランスを取りたい</li>
              <li>エンジニアの離職を防ぎたい</li>
              <li>技術者同士の1on1を活性化させたい</li>
            </ul>

            <h3>スタートアップ・急成長企業</h3>
            <ul>
              <li>組織が大きくなる中でマネジメント体制を整えたい</li>
              <li>創業メンバーとの関係性を維持しながら組織を拡大したい</li>
              <li>早期に1on1文化を根付かせたい</li>
            </ul>

            <h3>既存企業の組織改革</h3>
            <ul>
              <li>形骸化した1on1を立て直したい</li>
              <li>新しいマネジメント文化を作りたい</li>
              <li>メンバーエンゲージメントを向上させたい</li>
            </ul>
          </section>

          <section>
            <h2>私の考え方</h2>

            <h3>完璧を目指さない</h3>
            <p>1on1は完璧にやる必要はありません。一つでも二つでも、明日から試してみる。そんな小さな行動の積み重ねが、やがて大きな変化を生みます。</p>

            <h3>形だけの施策はしない</h3>
            <p>「当たり障りのない施策は、後の世代に迷惑をかける」という言葉があります。1on1も同じです。やるなら本質を突く。痛みを伴っても、本当に相手のためになる1on1をする。</p>

            <h3>実践して初めて価値が出る</h3>
            <p>この支援の内容は、聞いただけでは意味がありません。実践されて初めて価値を持ちます。だからこそ、実践のサポート、定着までのフォローを重視しています。</p>
          </section>

          <section>
            <h2>期待できる効果</h2>

            <h3>短期的効果（1〜3ヶ月）</h3>
            <ul>
              <li>マネージャーの1on1に対する苦手意識の軽減</li>
              <li>1on1の質の向上（雑談の活性化、本音の引き出し）</li>
              <li>メンバーからの信頼感の向上</li>
            </ul>

            <h3>中期的効果（3〜6ヶ月）</h3>
            <ul>
              <li>メンバーとの深い信頼関係の構築</li>
              <li>早期の課題検知と対応</li>
              <li>チーム内コミュニケーションの改善</li>
            </ul>

            <h3>長期的効果（6ヶ月〜）</h3>
            <ul>
              <li>離職率の低下</li>
              <li>メンバーの自律的な成長</li>
              <li>組織全体のパフォーマンス向上</li>
              <li>1on1文化の定着と継承</li>
            </ul>
          </section>

          <div className="contact-section">
            <h2>お問い合わせ</h2>
            <p>1on1を通じて、あなたの組織の可能性を最大化しませんか？</p>
            <p><strong>まずはお気軽にご相談ください。</strong></p>
            <ul>
              <li>初回相談（30分）は無料です</li>
              <li>オンラインでの面談も可能です</li>
              <li>貴社の課題に合わせたカスタマイズプランをご提案します</li>
            </ul>
            <h3 style={{ marginTop: '30px', border: 'none', padding: 0 }}>お問い合わせ方法</h3>
            <ul style={{ marginTop: '15px' }}>
              <li>Email: hi@hisasann.dev</li>
              <li>Twitter/X: @hisasann</li>
            </ul>
          </div>

          <footer className="consulting-footer">
            <p>あなたの1on1が、メンバーにとっても、あなた自身にとっても、意味のある時間になることを願っています。</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default OneOnOneConsultingProposal;

