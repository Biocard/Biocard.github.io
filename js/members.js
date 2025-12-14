// 成员数据
const membersData = {
    faculty: [
        {
            name: '张教授',
            role: '教授、博士生导师',
            bio: '研究方向：机器学习、深度学习。发表SCI论文100余篇，主持国家自然科学基金重点项目等。',
            initial: '张'
        },
        {
            name: '李副教授',
            role: '副教授、硕士生导师',
            bio: '研究方向：数据挖掘、知识图谱。主持多项省部级科研项目，获得多项专利。',
            initial: '李'
        }
    ],
    phd: [
        {
            name: '王同学',
            role: '博士生',
            bio: '研究方向：强化学习、多智能体系统。已发表顶级会议论文3篇。',
            initial: '王'
        },
        {
            name: '刘同学',
            role: '博士生',
            bio: '研究方向：计算机视觉、图像识别。参与多项国家级科研项目。',
            initial: '刘'
        },
        {
            name: '陈同学',
            role: '博士生',
            bio: '研究方向：自然语言处理、文本挖掘。获得优秀研究生奖学金。',
            initial: '陈'
        }
    ],
    master: [
        {
            name: '赵同学',
            role: '硕士生',
            bio: '研究方向：推荐系统、数据挖掘。',
            initial: '赵'
        },
        {
            name: '孙同学',
            role: '硕士生',
            bio: '研究方向：深度学习、神经网络。',
            initial: '孙'
        },
        {
            name: '周同学',
            role: '硕士生',
            bio: '研究方向：知识图谱、语义分析。',
            initial: '周'
        },
        {
            name: '吴同学',
            role: '硕士生',
            bio: '研究方向：机器学习、模式识别。',
            initial: '吴'
        },
        {
            name: '郑同学',
            role: '硕士生',
            bio: '研究方向：大数据分析、分布式计算。',
            initial: '郑'
        }
    ],
    undergrad: [
        {
            name: '钱同学',
            role: '本科生',
            bio: '研究方向：人工智能应用。',
            initial: '钱'
        },
        {
            name: '冯同学',
            role: '本科生',
            bio: '研究方向：机器学习入门。',
            initial: '冯'
        }
    ]
};

// 创建成员卡片
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `
        <div class="avatar">${member.initial}</div>
        <h4>${member.name}</h4>
        <div class="role">${member.role}</div>
        <div class="bio">${member.bio}</div>
    `;
    return card;
}

// 填充成员列表
function fillMembers() {
    // 填充导师
    const facultyContainer = document.getElementById('faculty-members');
    if (facultyContainer) {
        membersData.faculty.forEach(member => {
            facultyContainer.appendChild(createMemberCard(member));
        });
    }

    // 填充博士生
    const phdContainer = document.getElementById('phd-members');
    if (phdContainer) {
        membersData.phd.forEach(member => {
            phdContainer.appendChild(createMemberCard(member));
        });
    }

    // 填充硕士生
    const masterContainer = document.getElementById('master-members');
    if (masterContainer) {
        membersData.master.forEach(member => {
            masterContainer.appendChild(createMemberCard(member));
        });
    }

    // 填充本科生
    const undergradContainer = document.getElementById('undergrad-members');
    if (undergradContainer) {
        membersData.undergrad.forEach(member => {
            undergradContainer.appendChild(createMemberCard(member));
        });
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', fillMembers);
