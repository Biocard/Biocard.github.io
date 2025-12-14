// 工作成果数据
const worksData = [
    {
        type: 'paper',
        title: 'Deep Reinforcement Learning for Multi-Agent Systems',
        authors: 'Zhang, W., Li, M., Wang, X., et al.',
        venue: 'Nature Machine Intelligence, 2025',
        tags: ['论文', '强化学习', '多智能体'],
        links: [
            { text: 'PDF', url: '#' },
            { text: 'arXiv', url: '#' }
        ]
    },
    {
        type: 'paper',
        title: 'Knowledge Graph Embedding with Graph Neural Networks',
        authors: 'Liu, Y., Chen, Z., Zhao, H., et al.',
        venue: 'AAAI 2026',
        tags: ['论文', '知识图谱', '图神经网络'],
        links: [
            { text: 'PDF', url: '#' },
            { text: 'Code', url: '#' }
        ]
    },
    {
        type: 'paper',
        title: 'A Novel Approach to Recommendation Systems Using Deep Learning',
        authors: 'Sun, L., Wu, J., Zheng, K., et al.',
        venue: 'ICML 2025',
        tags: ['论文', '推荐系统', '深度学习'],
        links: [
            { text: 'PDF', url: '#' }
        ]
    },
    {
        type: 'patent',
        title: '一种基于深度学习的智能推荐方法及系统',
        authors: '张教授, 李副教授, 王同学',
        venue: '发明专利, 申请号: CN202510000001',
        tags: ['专利', '推荐系统'],
        links: [
            { text: '详情', url: '#' }
        ]
    },
    {
        type: 'patent',
        title: '基于知识图谱的智能问答系统',
        authors: '张教授, 刘同学, 陈同学',
        venue: '发明专利, 申请号: CN202510000002',
        tags: ['专利', '知识图谱', '问答系统'],
        links: [
            { text: '详情', url: '#' }
        ]
    },
    {
        type: 'award',
        title: '省科技进步一等奖',
        authors: '课题组',
        venue: '2025年度省科技进步奖',
        tags: ['获奖', '科技进步奖'],
        links: []
    },
    {
        type: 'award',
        title: '优秀研究生奖学金',
        authors: '王同学, 刘同学',
        venue: '2025年度',
        tags: ['获奖', '奖学金'],
        links: []
    },
    {
        type: 'project',
        title: '国家自然科学基金重点项目',
        authors: '张教授（主持）',
        venue: '2024-2027',
        tags: ['项目', '国家基金'],
        links: []
    },
    {
        type: 'project',
        title: '企业合作项目：智能数据分析平台',
        authors: '课题组',
        venue: '2025-2028',
        tags: ['项目', '企业合作'],
        links: []
    }
];

// 创建成果项
function createWorkItem(work) {
    const item = document.createElement('div');
    item.className = 'work-item';
    item.dataset.type = work.type;
    
    const linksHtml = work.links.length > 0 
        ? `<div class="links">${work.links.map(link => `<a href="${link.url}">${link.text}</a>`).join('')}</div>`
        : '';
    
    item.innerHTML = `
        <h3>${work.title}</h3>
        <div class="authors">${work.authors}</div>
        <div class="venue">${work.venue}</div>
        <div class="tags">${work.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        ${linksHtml}
    `;
    
    return item;
}

// 填充成果列表
function fillWorks(filter = 'all') {
    const container = document.getElementById('works-list');
    if (!container) return;
    
    // 清空容器
    container.innerHTML = '';
    
    // 过滤数据
    const filteredData = filter === 'all' 
        ? worksData 
        : worksData.filter(work => work.type === filter);
    
    // 填充数据
    filteredData.forEach(work => {
        container.appendChild(createWorkItem(work));
    });
}

// 标签页切换
function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有active类
            tabs.forEach(t => t.classList.remove('active'));
            // 添加active类到当前标签
            this.classList.add('active');
            // 获取过滤类型
            const filter = this.dataset.filter;
            // 填充对应内容
            fillWorks(filter);
        });
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    fillWorks('all');
    setupTabs();
});
