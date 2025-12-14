// 新闻数据（与main.js中的相同，但包含完整内容）
const newsData = [
    {
        title: '《Nature Machine Intelligence》发表新论文',
        date: '2025-12-10',
        category: '科研成果',
        content: '关于深度强化学习方法在智能决策系统中的研究成果被《Nature Machine Intelligence》录用。该研究提出了一种新的多智能体协作框架，在多个基准测试中取得了显著提升。研究团队通过引入注意力机制和自适应学习策略，有效解决了多智能体系统中的协调问题，为智能决策系统的发展提供了新的思路。'
    },
    {
        title: '课题组获得省级科技进步一等奖',
        date: '2025-11-21',
        category: '获奖',
        content: '我组在"基于深度学习的智能推荐系统关键技术研究"项目中荣获2025年度省科技进步一等奖。这是对我组多年来在人工智能领域持续创新的认可。该项目在推荐算法、用户建模、系统优化等方面取得了重要突破，相关技术已应用于多个实际场景，产生了显著的经济和社会效益。'
    },
    {
        title: '参加AAAI 2026国际会议',
        date: '2025-10-20',
        category: '学术活动',
        content: '课题组多名成员受邀参加AAAI 2026（第40届人工智能协会年会），并在会议上作口头报告，展示了我们在机器学习领域的最新研究成果。会议期间，团队成员与来自世界各地的专家学者进行了深入交流，探讨了人工智能领域的前沿问题和发展趋势。'
    },
    {
        title: '新成员加入课题组',
        date: '2025-09-15',
        category: '团队动态',
        content: '欢迎3名新博士生和5名硕士生加入我们的研究团队。他们将在机器学习、数据科学等领域开展深入研究。新成员们来自不同的学术背景，将为课题组带来新的研究视角和创新思路。我们期待他们在未来的科研工作中取得优异成绩。'
    },
    {
        title: '与企业合作项目启动',
        date: '2025-08-10',
        category: '项目动态',
        content: '与某知名科技公司签署合作协议，共同开展"智能数据分析平台"的研发工作，项目周期为3年，总经费500万元。该项目将结合企业的实际需求和课题组的技术优势，开发具有自主知识产权的智能数据分析系统，推动产学研深度融合。'
    },
    {
        title: '举办学术研讨会',
        date: '2025-07-05',
        category: '学术活动',
        content: '课题组成功举办了"人工智能前沿技术"学术研讨会，邀请了多位国内外知名专家作主题报告。研讨会围绕深度学习、强化学习、知识图谱等热点话题进行了深入讨论，吸引了200余名师生参与。'
    },
    {
        title: '论文被ICML 2025接收',
        date: '2025-06-18',
        category: '科研成果',
        content: '课题组在推荐系统领域的研究论文被ICML 2025（国际机器学习会议）接收。该论文提出了一种新的深度学习方法，在多个公开数据集上取得了state-of-the-art的性能。'
    },
    {
        title: '获得国家自然科学基金资助',
        date: '2025-05-12',
        category: '项目动态',
        content: '课题组申请的"基于图神经网络的复杂系统建模与优化"项目获得国家自然科学基金面上项目资助，资助金额80万元，研究周期4年。该项目将探索图神经网络在复杂系统建模中的应用。'
    }
];

// 创建新闻项
function createNewsItem(news) {
    const item = document.createElement('div');
    item.className = 'news-item';
    item.innerHTML = `
        <h3>${news.title}</h3>
        <div class="meta">
            <span>日期: ${news.date}</span>
            <span>类别: ${news.category}</span>
        </div>
        <div class="content">${news.content}</div>
    `;
    return item;
}

// 填充新闻列表
function fillNews() {
    const container = document.getElementById('news-list');
    if (!container) return;
    
    // 按日期倒序排列
    const sortedNews = [...newsData].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    sortedNews.forEach(news => {
        container.appendChild(createNewsItem(news));
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', fillNews);
