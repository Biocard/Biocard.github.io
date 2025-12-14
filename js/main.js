// 新闻数据
const newsData = [
    {
        title: '《Nature Machine Intelligence》发表新论文',
        date: '2025-12-10',
        summary: '关于深度强化学习方法在智能决策系统中的研究成果被《Nature Machine Intelligence》录用。该研究提出了一种新的多智能体协作框架，在多个基准测试中取得了显著提升。'
    },
    {
        title: '课题组获得省级科技进步一等奖',
        date: '2025-11-21',
        summary: '我组在"基于深度学习的智能推荐系统关键技术研究"项目中荣获2025年度省科技进步一等奖。这是对我组多年来在人工智能领域持续创新的认可。'
    },
    {
        title: '参加AAAI 2026国际会议',
        date: '2025-10-20',
        summary: '课题组多名成员受邀参加AAAI 2026（第40届人工智能协会年会），并在会议上作口头报告，展示了我们在机器学习领域的最新研究成果。'
    },
    {
        title: '新成员加入课题组',
        date: '2025-09-15',
        summary: '欢迎3名新博士生和5名硕士生加入我们的研究团队。他们将在机器学习、数据科学等领域开展深入研究。'
    },
    {
        title: '与企业合作项目启动',
        date: '2025-08-10',
        summary: '与某知名科技公司签署合作协议，共同开展"智能数据分析平台"的研发工作，项目周期为3年，总经费500万元。'
    }
];

// 填充主页近期新闻
function fillRecentNews() {
    const ul = document.getElementById('recent-news');
    if (!ul) return;
    
    // 显示最近3条新闻
    newsData.slice(0, 3).forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${item.title}</strong>
            <span class="date">(${item.date})</span>
            <div class="summary">${item.summary}</div>
        `;
        ul.appendChild(li);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    fillRecentNews();
});
