const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const photoPlaceholder = document.getElementById("photo-placeholder");
const startBtn = document.getElementById("start-btn");
const captureBtn = document.getElementById("capture-btn");
const cameraError = document.getElementById("camera-error");
const apiKeyInput = document.getElementById("api-key");
const identifyBtn = document.getElementById("identify-btn");
const identifyStatus = document.getElementById("identify-status");
const identifyStatusText = document.getElementById("identify-status-text");
const identifyResult = document.getElementById("identify-result");
const identifyResultName = document.getElementById("identify-result-name");
const identifyResultImpact = document.getElementById("identify-result-impact");
const identifyResultRecycle = document.getElementById("identify-result-recycle");
const identifyResultFact = document.getElementById("identify-result-fact");
const verifyDisposalSection = document.getElementById("verify-disposal-section");
const verifyDisposalBtn = document.getElementById("verify-disposal-btn");
const verifyDisposalPrompt = document.getElementById("verify-disposal-prompt");
const verifyDisposalSubtext = document.getElementById("verify-disposal-subtext");
const disposalVerifiedBadge = document.getElementById("disposal-verified-badge");
const retryBinBtn = document.getElementById("retry-bin-btn");
const binScanInstruction = document.getElementById("bin-scan-instruction");
const captureBinBtn = document.getElementById("capture-bin-btn");
const cancelBinBtn = document.getElementById("cancel-bin-btn");
const binIdentifyStatus = document.getElementById("bin-identify-status");
const binIdentifyStatusText = document.getElementById("bin-identify-status-text");
const binCorrectionModal = document.getElementById("bin-correction-modal");
const binCorrectionMessage = document.getElementById("bin-correction-message");
const binCorrectionRetry = document.getElementById("bin-correction-retry");
const binCorrectionClose = document.getElementById("bin-correction-close");
const verifySuccessOverlay = document.getElementById("verify-success-overlay");
const verifySuccessParticles = document.getElementById("verify-success-particles");
const verifySuccessPoints = document.getElementById("verify-success-points");
const identifyError = document.getElementById("identify-error");
const scanOverlay = document.getElementById("scan-overlay");
const scanPointsEarned = document.getElementById("scan-points-earned");
const scanCategory = document.getElementById("scan-category");
const impactToggleBtn = document.getElementById("impact-toggle-btn");
const impactDetails = document.getElementById("impact-details");
const lifecycleBtn = document.getElementById("lifecycle-btn");
const lifecycleModal = document.getElementById("lifecycle-modal");
const lifecycleItemName = document.getElementById("lifecycle-item-name");
const lifecyclePhoto = document.getElementById("lifecycle-photo");
const lifecycle3dStage = document.getElementById("lifecycle-3d-stage");
const lifecycleItemSpin = document.getElementById("lifecycle-item-spin");
const lifecycleIsolateLoading = document.getElementById("lifecycle-isolate-loading");
const lifecycleDecomposeSteps = document.getElementById("lifecycle-decompose-steps");
const lifecycleRecycleSteps = document.getElementById("lifecycle-recycle-steps");
const lifecycleClose = document.getElementById("lifecycle-close");
const upcycleBtn = document.getElementById("upcycle-btn");
const upcycleModal = document.getElementById("upcycle-modal");
const upcycleModalTitle = document.getElementById("upcycle-modal-title");
const upcycleModalList = document.getElementById("upcycle-modal-list");
const upcycleModalTip = document.getElementById("upcycle-modal-tip");
const upcycleModalClose = document.getElementById("upcycle-modal-close");
const upcycleMainView = document.getElementById("upcycle-main-view");
const tutorialPanel = document.getElementById("tutorial-panel");
const tutorialBackBtn = document.getElementById("tutorial-back-btn");
const tutorialTitle = document.getElementById("tutorial-title");
const tutorialMeta = document.getElementById("tutorial-meta");
const tutorialMaterialsBlock = document.getElementById("tutorial-materials-block");
const tutorialMaterials = document.getElementById("tutorial-materials");
const tutorialSteps = document.getElementById("tutorial-steps");
const collectionGrid = document.getElementById("collection-grid");
const collectionFilter = document.getElementById("collection-filter");
const collectionBonusSection = document.getElementById("collection-bonus-section");
const collectionBonusList = document.getElementById("collection-bonus-list");
const collectionDetailModal = document.getElementById("collection-detail-modal");
const collectionDetailClose = document.getElementById("collection-detail-close");
const pointsValue = document.getElementById("points-value");
const statScans = document.getElementById("stat-scans");
const statWaste = document.getElementById("stat-waste");
const statCo2 = document.getElementById("stat-co2");
const toastContainer = document.getElementById("toast-container");
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");
const profileDisplay = document.getElementById("profile-display");
const profilePlaceholder = document.getElementById("profile-placeholder");
const profileAvatar = document.getElementById("profile-avatar");
const profileName = document.getElementById("profile-name");
const profileModal = document.getElementById("profile-modal");
const profileForm = document.getElementById("profile-form");
const profileUsernameInput = document.getElementById("profile-username");
const profileAvatarInput = document.getElementById("profile-avatar-input");
const avatarPicker = document.getElementById("avatar-picker");
const editProfileBtn = document.getElementById("edit-profile-btn");
const transportModal = document.getElementById("transport-modal");
const transportTitle = document.getElementById("transport-title");
const transportDesc = document.getElementById("transport-desc");
const transportLevel = document.getElementById("transport-level");
const transportDismiss = document.getElementById("transport-dismiss");
const levelLabel = document.getElementById("level-label");
const levelNext = document.getElementById("level-next");
const levelProgressFill = document.getElementById("level-progress-fill");
const helpModal = document.getElementById("help-modal");
const helpBtn = document.getElementById("help-btn");
const helpClose = document.getElementById("help-close");
const badgesList = document.getElementById("badges-list");
const mainLeaderboard = document.getElementById("main-leaderboard");
const friendSuggestions = document.getElementById("friend-suggestions");
const friendsList = document.getElementById("friends-list");
const friendRequestsReceived = document.getElementById("friend-requests-received");
const friendRequestsSent = document.getElementById("friend-requests-sent");
const friendAddForm = document.getElementById("friend-add-form");
const friendHandleInput = document.getElementById("friend-handle-input");
const myCommunitiesSection = document.getElementById("my-communities-section");
const myCommunitiesList = document.getElementById("my-communities-list");
const communitiesBrowseList = document.getElementById("communities-browse-list");
const friendChallengeCreate = document.getElementById("friend-challenge-create");
const friendChallengesIncoming = document.getElementById("friend-challenges-incoming");
const friendChallengesActive = document.getElementById("friend-challenges-active");
const communityChallengesList = document.getElementById("community-challenges-list");
const communityDetailModal = document.getElementById("community-detail-modal");
const communityDetailClose = document.getElementById("community-detail-close");
let currentLbTab = "leaderboard";

function getCommunitiesData() {
  return loadJson(STORAGE_COMMUNITIES, { joined: [] });
}

function saveCommunitiesData(data) {
  saveJson(STORAGE_COMMUNITIES, data);
}

function isCommunityJoined(communityId) {
  return getCommunitiesData().joined.includes(communityId);
}

function getCommunityById(id) {
  return COMMUNITY_CATALOG.find((c) => c.id === id);
}

function joinCommunity(communityId) {
  const data = getCommunitiesData();
  if (!data.joined.includes(communityId)) {
    data.joined.push(communityId);
    saveCommunitiesData(data);
    const community = getCommunityById(communityId);
    showToast(`Joined ${community?.name || "community"}!`, "info");
    renderLeaderboardPage();
  }
}

function leaveCommunity(communityId) {
  const data = getCommunitiesData();
  data.joined = data.joined.filter((id) => id !== communityId);
  saveCommunitiesData(data);
  const community = getCommunityById(communityId);
  showToast(`Left ${community?.name || "community"}`, "info");
  renderLeaderboardPage();
}

function getChallengesData() {
  return loadJson(STORAGE_CHALLENGES, { friendChallenges: [], communityChallenges: [] });
}

function saveChallengesData(data) {
  saveJson(STORAGE_CHALLENGES, data);
}

function generateChallengeId() {
  return `ch-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function getChallengeTypeDef(typeId) {
  return FRIEND_CHALLENGE_TYPES.find((t) => t.id === typeId);
}

function seedChallengesIfNeeded() {
  if (localStorage.getItem(STORAGE_CHALLENGES_SEEDED)) return;
  const data = getChallengesData();
  const now = Date.now();
  const weekMs = 7 * 24 * 60 * 60 * 1000;

  if (data.friendChallenges.length === 0) {
    data.friendChallenges.push({
      id: generateChallengeId(),
      type: "collect_items",
      status: "active",
      direction: "incoming",
      challengerHandle: "@mayagreen",
      challengerName: "Maya Green",
      challengerColor: "#6b8e6b",
      challengerInitial: "M",
      challengedHandle: "@you",
      progress: 2,
      goal: 5,
      startAt: now - 3 * 24 * 60 * 60 * 1000,
      endAt: now + 11 * 24 * 60 * 60 * 1000,
      reward: 25,
    });
    data.friendChallenges.push({
      id: generateChallengeId(),
      type: "most_scans",
      status: "active",
      direction: "outgoing",
      challengerHandle: "@you",
      challengedHandle: "@sampark",
      challengedName: "Sam Park",
      challengedColor: "#4a7c59",
      challengedInitial: "S",
      progress: 4,
      goal: 7,
      startAt: now - 2 * 24 * 60 * 60 * 1000,
      endAt: now + weekMs,
      reward: 25,
    });
    data.friendChallenges.push({
      id: generateChallengeId(),
      type: "earn_points",
      status: "pending",
      direction: "incoming",
      challengerHandle: "@sampark",
      challengerName: "Sam Park",
      challengerColor: "#4a7c59",
      challengerInitial: "S",
      challengedHandle: "@you",
      progress: 0,
      goal: 100,
      startAt: now,
      endAt: now + weekMs,
      reward: 25,
    });
  }

  if (data.communityChallenges.length === 0) {
    COMMUNITY_CHALLENGE_DEFS.forEach((def) => {
      data.communityChallenges.push({
        id: def.id,
        communityId: def.communityId,
        type: def.type,
        label: def.label,
        communityGoal: def.communityGoal,
        communityProgress: def.communityProgress,
        personalContribution: 0,
        joined: false,
        completed: false,
        rewardClaimed: false,
        bonusPoints: def.bonusPoints,
        badgeId: def.badgeId,
      });
    });
  }

  saveChallengesData(data);
  localStorage.setItem(STORAGE_CHALLENGES_SEEDED, "1");
}

function formatTimeRemaining(endAt) {
  const ms = endAt - Date.now();
  if (ms <= 0) return "Ended";
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  if (days > 0) return `${days}d ${hours}h left`;
  if (hours > 0) return `${hours}h left`;
  const mins = Math.floor(ms / (60 * 1000));
  return `${mins}m left`;
}

function createFriendChallenge(friendHandle, typeId) {
  const typeDef = getChallengeTypeDef(typeId);
  if (!typeDef) return;

  const friends = getFriends();
  const friend = friends.find((f) => f.handle === friendHandle);
  const demo = findDemoUser(friendHandle);

  if (!friend && !demo) {
    showToast("Add them as a friend first", "info");
    return;
  }

  const data = getChallengesData();
  const now = Date.now();
  const endAt = now + typeDef.days * 24 * 60 * 60 * 1000;

  data.friendChallenges.push({
    id: generateChallengeId(),
    type: typeId,
    status: "pending",
    direction: "outgoing",
    challengerHandle: "@you",
    challengedHandle: friendHandle,
    challengedName: friend?.name || demo?.name || friendHandle,
    challengedColor: friend?.color || demo?.color || "#6b8e6b",
    challengedInitial: friend?.initial || demo?.initial || "?",
    progress: 0,
    goal: typeDef.goal,
    startAt: now,
    endAt,
    reward: typeDef.reward,
  });

  saveChallengesData(data);
  showToast(`Challenge sent to ${friend?.name || demo?.name || friendHandle}!`, "info");
  renderLeaderboardPage();
}

function acceptFriendChallenge(challengeId) {
  const data = getChallengesData();
  const challenge = data.friendChallenges.find((c) => c.id === challengeId);
  if (!challenge || challenge.status !== "pending") return;

  challenge.status = "active";
  challenge.startAt = Date.now();
  const typeDef = getChallengeTypeDef(challenge.type);
  challenge.endAt = challenge.startAt + (typeDef?.days || 7) * 24 * 60 * 60 * 1000;
  saveChallengesData(data);
  showToast("Challenge accepted — good luck!", "info");
  renderLeaderboardPage();
}

function declineFriendChallenge(challengeId) {
  const data = getChallengesData();
  const challenge = data.friendChallenges.find((c) => c.id === challengeId);
  if (!challenge) return;
  challenge.status = "declined";
  saveChallengesData(data);
  showToast("Challenge declined", "info");
  renderLeaderboardPage();
}

function joinCommunityChallenge(challengeId) {
  const data = getChallengesData();
  const challenge = data.communityChallenges.find((c) => c.id === challengeId);
  if (!challenge) return;

  if (!isCommunityJoined(challenge.communityId)) {
    showToast("Join the community first", "info");
    return;
  }

  challenge.joined = true;
  saveChallengesData(data);
  const community = getCommunityById(challenge.communityId);
  showToast(`Joined ${community?.name || "community"} challenge!`, "info");
  renderLeaderboardPage();
}

function completeFriendChallenge(challenge) {
  const data = getChallengesData();
  const idx = data.friendChallenges.findIndex((c) => c.id === challenge.id);
  if (idx === -1) return;

  data.friendChallenges[idx].status = "completed";
  saveChallengesData(data);

  const newPoints = getPoints() + (challenge.reward || 25);
  setPoints(newPoints);
  renderStats();
  showToast(`Challenge won! +${challenge.reward || 25} pts`, "points");
}

function completeCommunityChallenge(challenge) {
  const data = getChallengesData();
  const idx = data.communityChallenges.findIndex((c) => c.id === challenge.id);
  if (idx === -1 || data.communityChallenges[idx].rewardClaimed) return;

  data.communityChallenges[idx].completed = true;
  data.communityChallenges[idx].rewardClaimed = true;
  saveChallengesData(data);

  const bonus = challenge.bonusPoints || 50;
  const newPoints = getPoints() + bonus;
  setPoints(newPoints);
  renderStats();

  if (challenge.badgeId) {
    const earned = getEarnedBadges();
    if (!earned.includes(challenge.badgeId)) {
      earned.push(challenge.badgeId);
      saveEarnedBadges(earned);
      const badge = BADGES.find((b) => b.id === challenge.badgeId);
      if (badge) {
        showToast(`Badge unlocked: ${badge.emoji} ${badge.name}`, "badge");
      }
      renderBadgesList();
    }
  }

  const community = getCommunityById(challenge.communityId);
  showToast(`${community?.name || "Community"} goal met! +${bonus} bonus pts`, "badge");
}

function updateChallengeProgress(scanMeta, collectionResult) {
  const data = getChallengesData();
  let changed = false;

  data.friendChallenges.forEach((challenge) => {
    if (challenge.status !== "active") return;
    if (challenge.endAt && Date.now() > challenge.endAt) return;

    const isParticipant = challenge.direction === "incoming"
      || challenge.challengerHandle === "@you"
      || challenge.challengedHandle === "@you";

    if (!isParticipant) return;

    if (challenge.type === "most_scans") {
      challenge.progress = (challenge.progress || 0) + 1;
      changed = true;
    } else if (challenge.type === "collect_items" && collectionResult?.isNew) {
      challenge.progress = (challenge.progress || 0) + 1;
      changed = true;
    } else if (challenge.type === "earn_points") {
      challenge.progress = (challenge.progress || 0) + (scanMeta?.pointsEarned || 0);
      changed = true;
    }

    if (challenge.progress >= challenge.goal) {
      completeFriendChallenge(challenge);
      changed = false;
    }
  });

  data.communityChallenges.forEach((challenge) => {
    if (!challenge.joined || challenge.completed) return;

    if (challenge.type === "collective_scans") {
      challenge.personalContribution = (challenge.personalContribution || 0) + 1;
      challenge.communityProgress = Math.min(
        challenge.communityGoal,
        (challenge.communityProgress || 0) + 1
      );
      changed = true;
    } else if (challenge.type === "plastic_items" && collectionResult?.isNew) {
      const item = collectionResult.item;
      const isPlastic = item?.category === "Plastic"
        || (item?.name && /plastic/i.test(item.name));
      if (isPlastic) {
        challenge.personalContribution = (challenge.personalContribution || 0) + 1;
        challenge.communityProgress = Math.min(
          challenge.communityGoal,
          (challenge.communityProgress || 0) + 1
        );
        changed = true;
      }
    }

    if (challenge.communityProgress >= challenge.communityGoal && !challenge.rewardClaimed) {
      completeCommunityChallenge(challenge);
    }
  });

  if (changed) saveChallengesData(data);
}

function renderCommunityCard(community, isJoined) {
  const el = document.createElement("div");
  el.className = `community-card${isJoined ? " joined" : ""}`;
  el.innerHTML = `
    <div class="community-card-header">
      <span class="community-card-icon" aria-hidden="true">${community.icon}</span>
      <div class="community-card-info">
        <span class="community-card-name">${community.name}</span>
        <span class="community-card-members">${community.membersLabel}</span>
      </div>
    </div>
    <p class="community-card-desc">${community.description}</p>
    <div class="community-card-actions">
      <button type="button" class="link-btn community-detail-btn" data-id="${community.id}">Details</button>
      <button type="button" class="btn-community-toggle ${isJoined ? "btn-leave" : "btn-join"}" data-id="${community.id}">
        ${isJoined ? "Leave" : "Join"}
      </button>
    </div>
  `;
  return el;
}

function renderCommunitiesPanel() {
  const joinedIds = getCommunitiesData().joined;

  if (myCommunitiesSection && myCommunitiesList) {
    const joined = COMMUNITY_CATALOG.filter((c) => joinedIds.includes(c.id));
    myCommunitiesSection.classList.toggle("hidden", joined.length === 0);
    myCommunitiesList.innerHTML = "";
    joined.forEach((community) => {
      myCommunitiesList.appendChild(renderCommunityCard(community, true));
    });
  }

  if (communitiesBrowseList) {
    communitiesBrowseList.innerHTML = "";
    COMMUNITY_CATALOG.forEach((community) => {
      communitiesBrowseList.appendChild(renderCommunityCard(community, joinedIds.includes(community.id)));
    });

    communitiesBrowseList.querySelectorAll(".btn-join").forEach((btn) => {
      btn.addEventListener("click", () => joinCommunity(btn.dataset.id));
    });
    communitiesBrowseList.querySelectorAll(".btn-leave").forEach((btn) => {
      btn.addEventListener("click", () => leaveCommunity(btn.dataset.id));
    });
    communitiesBrowseList.querySelectorAll(".community-detail-btn").forEach((btn) => {
      btn.addEventListener("click", () => showCommunityDetail(btn.dataset.id));
    });
  }

  if (myCommunitiesList) {
    myCommunitiesList.querySelectorAll(".btn-leave").forEach((btn) => {
      btn.addEventListener("click", () => leaveCommunity(btn.dataset.id));
    });
    myCommunitiesList.querySelectorAll(".community-detail-btn").forEach((btn) => {
      btn.addEventListener("click", () => showCommunityDetail(btn.dataset.id));
    });
  }
}

function showCommunityDetail(communityId) {
  const community = getCommunityById(communityId);
  if (!community || !communityDetailModal) return;

  document.getElementById("community-detail-icon").textContent = community.icon;
  document.getElementById("community-detail-title").textContent = community.name;
  document.getElementById("community-detail-members").textContent = community.membersLabel;
  document.getElementById("community-detail-desc").textContent = community.description;

  const activityEl = document.getElementById("community-detail-activity");
  if (activityEl) {
    activityEl.innerHTML = community.activity.map((a) => `
      <div class="community-activity-item">
        <span class="community-activity-user">${a.user}</span>
        <span class="community-activity-action">${a.action}</span>
        <span class="community-activity-time">${a.time}</span>
      </div>
    `).join("");
  }

  const lbEl = document.getElementById("community-detail-leaderboard");
  if (lbEl) {
    lbEl.innerHTML = "";
    community.leaderboard.forEach((member, i) => {
      const row = document.createElement("div");
      row.className = "leaderboard-row";
      row.innerHTML = `
        <span class="leaderboard-rank">#${i + 1}</span>
        <span class="leaderboard-avatar" style="background:${member.color}">${member.initial}</span>
        <div class="leaderboard-info">
          <span class="leaderboard-name">${member.name}</span>
        </div>
        <span class="leaderboard-pts">${member.points.toLocaleString()}</span>
      `;
      lbEl.appendChild(row);
    });
  }

  communityDetailModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function hideCommunityDetail() {
  if (!communityDetailModal) return;
  communityDetailModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function renderChallengeCard(challenge, kind) {
  const el = document.createElement("div");
  el.className = "challenge-card";

  if (kind === "friend") {
    const typeDef = getChallengeTypeDef(challenge.type);
    const label = typeDef?.label || challenge.type;
    const pct = Math.min(100, Math.round(((challenge.progress || 0) / challenge.goal) * 100));
    const isPending = challenge.status === "pending";
    const isIncoming = challenge.direction === "incoming" || challenge.challengerHandle !== "@you";

    const avatarName = isIncoming
      ? (challenge.challengerName || "Friend")
      : (challenge.challengedName || "Friend");
    const avatarColor = isIncoming
      ? (challenge.challengerColor || "#6b8e6b")
      : (challenge.challengedColor || "#6b8e6b");
    const avatarInitial = isIncoming
      ? (challenge.challengerInitial || "?")
      : (challenge.challengedInitial || "?");

    el.innerHTML = `
      <div class="challenge-card-header">
        <span class="leaderboard-avatar" style="background:${avatarColor}">${avatarInitial}</span>
        <div class="challenge-card-info">
          <span class="challenge-card-title">${isIncoming && isPending ? `${avatarName} challenged you` : label}</span>
          <span class="challenge-card-sub">${isPending ? "Awaiting response" : formatTimeRemaining(challenge.endAt)}</span>
        </div>
        <span class="challenge-reward">+${challenge.reward || 25} pts</span>
      </div>
      ${isPending ? `
        <div class="challenge-pending-actions">
          <button type="button" class="btn-accept challenge-accept-btn" data-id="${challenge.id}">Accept</button>
          <button type="button" class="btn-decline challenge-decline-btn" data-id="${challenge.id}">Decline</button>
        </div>
      ` : `
        <div class="challenge-progress-meta">
          <span>${challenge.progress || 0} / ${challenge.goal} ${typeDef?.unit || ""}</span>
          <span>${pct}%</span>
        </div>
        <div class="challenge-progress">
          <div class="challenge-progress-fill" style="width:${pct}%"></div>
        </div>
      `}
    `;
  } else {
    const community = getCommunityById(challenge.communityId);
    const pct = Math.min(100, Math.round(((challenge.communityProgress || 0) / challenge.communityGoal) * 100));
    const joined = challenge.joined;

    el.innerHTML = `
      <div class="challenge-card-header">
        <span class="community-card-icon" aria-hidden="true">${community?.icon || "🌿"}</span>
        <div class="challenge-card-info">
          <span class="challenge-card-title">${community?.name || "Community"}: ${challenge.label}</span>
          <span class="challenge-card-sub">${joined ? `Your contribution: ${challenge.personalContribution || 0}` : "Join to participate"}</span>
        </div>
        <span class="challenge-reward">+${challenge.bonusPoints || 50} pts</span>
      </div>
      <div class="challenge-progress-meta">
        <span>Group: ${challenge.communityProgress || 0} / ${challenge.communityGoal}</span>
        <span>${pct}%</span>
      </div>
      <div class="challenge-progress">
        <div class="challenge-progress-fill" style="width:${pct}%"></div>
      </div>
      ${!joined && !challenge.completed ? `
        <button type="button" class="btn-primary challenge-join-community-btn" data-id="${challenge.id}">Join Challenge</button>
      ` : ""}
      ${challenge.completed ? `<span class="challenge-complete-badge">✓ Goal met</span>` : ""}
    `;
  }

  return el;
}

function renderChallengesPanel() {
  const data = getChallengesData();
  const friends = getFriends();

  if (friendChallengeCreate) {
    const friendOptions = friends.length
      ? friends.map((f) => {
          const demo = findDemoUser(f.handle);
          return `<option value="${f.handle}">${f.name || demo?.name || f.handle}</option>`;
        }).join("")
      : "";

    const typeOptions = FRIEND_CHALLENGE_TYPES.map((t) =>
      `<option value="${t.id}">${t.label}</option>`
    ).join("");

    friendChallengeCreate.innerHTML = friends.length ? `
      <p class="section-hint">Challenge a friend to compete</p>
      <form id="challenge-create-form" class="challenge-create-form">
        <select id="challenge-friend-select" aria-label="Select friend">${friendOptions}</select>
        <select id="challenge-type-select" aria-label="Challenge type">${typeOptions}</select>
        <button type="submit" class="btn-primary challenge-send-btn">Send Challenge</button>
      </form>
    ` : `<p class="empty-state">Add friends first to send challenges</p>`;

    const form = document.getElementById("challenge-create-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const friendHandle = document.getElementById("challenge-friend-select")?.value;
        const typeId = document.getElementById("challenge-type-select")?.value;
        if (friendHandle && typeId) createFriendChallenge(friendHandle, typeId);
      });
    }
  }

  if (friendChallengesIncoming) {
    const pending = data.friendChallenges.filter(
      (c) => c.status === "pending" && c.direction === "incoming"
    );
    friendChallengesIncoming.innerHTML = "";
    if (pending.length === 0) {
      friendChallengesIncoming.innerHTML = '<p class="empty-state">No incoming challenges</p>';
    } else {
      pending.forEach((c) => {
        friendChallengesIncoming.appendChild(renderChallengeCard(c, "friend"));
      });
      friendChallengesIncoming.querySelectorAll(".challenge-accept-btn").forEach((btn) => {
        btn.addEventListener("click", () => acceptFriendChallenge(btn.dataset.id));
      });
      friendChallengesIncoming.querySelectorAll(".challenge-decline-btn").forEach((btn) => {
        btn.addEventListener("click", () => declineFriendChallenge(btn.dataset.id));
      });
    }
  }

  if (friendChallengesActive) {
    const active = data.friendChallenges.filter((c) => c.status === "active");
    friendChallengesActive.innerHTML = "";
    if (active.length === 0) {
      friendChallengesActive.innerHTML = '<p class="empty-state">No active friend challenges</p>';
    } else {
      active.forEach((c) => {
        friendChallengesActive.appendChild(renderChallengeCard(c, "friend"));
      });
    }
  }

  if (communityChallengesList) {
    const joinedCommunityIds = getCommunitiesData().joined;
    communityChallengesList.innerHTML = "";
    const challenges = data.communityChallenges.filter(
      (c) => joinedCommunityIds.includes(c.communityId) || c.joined
    );

    if (challenges.length === 0) {
      communityChallengesList.innerHTML = '<p class="empty-state">Join a community to see group challenges</p>';
    } else {
      challenges.forEach((c) => {
        communityChallengesList.appendChild(renderChallengeCard(c, "community"));
      });
      communityChallengesList.querySelectorAll(".challenge-join-community-btn").forEach((btn) => {
        btn.addEventListener("click", () => joinCommunityChallenge(btn.dataset.id));
      });
    }
  }
}

function updateLbSidebar(tabId) {
  const sidebars = ["friends", "communities", "challenges"];
  sidebars.forEach((id) => {
    const el = document.getElementById(`lb-sidebar-${id}`);
    if (el) el.classList.toggle("hidden", tabId !== id);
  });
  if (tabId === "leaderboard") {
    document.getElementById("lb-sidebar-friends")?.classList.remove("hidden");
    document.getElementById("lb-sidebar-communities")?.classList.add("hidden");
    document.getElementById("lb-sidebar-challenges")?.classList.add("hidden");
  }
}

function switchLbTab(tabId) {
  currentLbTab = tabId;
  document.querySelectorAll(".community-tab[data-lb-tab]").forEach((t) => {
    t.classList.toggle("active", t.dataset.lbTab === tabId);
  });
  document.querySelectorAll("[id^='lb-panel-']").forEach((panel) => {
    const isActive = panel.id === `lb-panel-${tabId}`;
    panel.classList.toggle("hidden", !isActive);
    panel.classList.toggle("active", isActive);
  });
  updateLbSidebar(tabId);
  if (tabId === "communities") renderCommunitiesPanel();
  if (tabId === "challenges") renderChallengesPanel();
}

const transportWorldBanner = document.getElementById("transport-world-banner");
const transportWorldImg = document.getElementById("transport-world-img");
const transportParticles = document.getElementById("transport-particles");
const worldHeroArt = document.getElementById("world-hero-art");
const worldHeroImg = document.getElementById("world-hero-img");
const sidebarProfileCard = document.getElementById("sidebar-profile-card");
const profileAccessory = document.getElementById("profile-accessory");
const wandererBubble = document.getElementById("wanderer-bubble");
const wandererBadge = document.getElementById("wanderer-badge");
const wandererEmoji = document.getElementById("wanderer-emoji");
const wandererName = document.getElementById("wanderer-name");
const wandererHint = document.getElementById("wanderer-hint");
const wandererDismiss = document.getElementById("wanderer-dismiss");
const wandererModal = document.getElementById("wanderer-modal");
const wandererModalEmoji = document.getElementById("wanderer-modal-emoji");
const wandererModalTitle = document.getElementById("wanderer-modal-title");
const wandererModalGreeting = document.getElementById("wanderer-modal-greeting");
const wandererActionsList = document.getElementById("wanderer-actions-list");
const wandererProgressText = document.getElementById("wanderer-progress-text");
const wandererModalClose = document.getElementById("wanderer-modal-close");
const prizeModal = document.getElementById("prize-modal");
const prizePreview = document.getElementById("prize-preview");
const prizeName = document.getElementById("prize-name");
const prizeEquipBtn = document.getElementById("prize-equip-btn");
const prizeLaterBtn = document.getElementById("prize-later-btn");
const framePicker = document.getElementById("frame-picker");
const accessoryPicker = document.getElementById("accessory-picker");
const accentPicker = document.getElementById("accent-picker");
const backgroundPicker = document.getElementById("background-picker");
const customizePreviewAvatar = document.getElementById("customize-preview-avatar");
const customizePreviewAccessory = document.getElementById("customize-preview-accessory");
const customizePreviewCard = document.getElementById("customize-preview-card");

const VISION_PROMPT = `You are an expert in waste management, recycling, and sustainability. Identify the trash, recyclable, or waste item in this photo.

Return ONLY valid JSON with exactly these keys:
- "name": the specific item name (e.g. "Aluminum soda can", "Plastic PET bottle")
- "category": one of "recyclable", "compostable", "landfill", "hazardous", "reusable", or "electronic"
- "correctDisposal": the single best disposal method — one of "recycle", "compost", "landfill", "hazardous", or "reuse"
- "recycleBullets": array of 2-3 short bullet strings with practical recycling/disposal tips (each under 120 chars)
- "upcycleBullets": array of 3-4 short bullet strings with practical DIY upcycle/reuse ideas (each under 100 chars, keep for fallback)
- "upcycleIdeas": array of 3-4 structured upcycle ideas, each object with: "title" (short idea name, e.g. "Turn into a planter"), "steps" (array of 4-6 step strings), "materials" (array of 2-4 short material names), "difficulty" (one of "Easy", "Medium", "Hard"), "timeEstimate" (e.g. "10 min")
- "impactBullets": array of 2-3 short bullet strings about environmental impact (decomposition, pollution, carbon)
- "funFact": one surprising or educational eco-fact (1 short sentence)
- "estimatedWeightGrams": your best estimate of the item's weight in grams (number only, e.g. 15)

If the item is unclear, make your best guess and note uncertainty briefly in impactBullets.`;

const BIN_VISION_PROMPT = `You are an expert in waste management bins and containers. Identify the type of disposal bin in this photo.

Return ONLY valid JSON with exactly these keys:
- "binType": one of "recycling", "compost", "landfill", "hazardous", "reuse", or "unknown"
- "binLabel": short human-readable label (e.g. "Blue recycling bin", "Green compost bin", "Black trash bin")
- "confidence": one of "high", "medium", or "low"

Map visual cues:
- Blue or green bins with recycling symbols → recycling
- Green or brown bins for food/yard waste → compost
- Black or grey trash cans → landfill
- Red, yellow, or specially marked hazardous containers → hazardous
- Donation boxes, reuse stations → reuse
If unclear or not a disposal bin, use binType "unknown".`;

const API_KEY_STORAGE = "camera-app-openai-api-key";
const STORAGE_POINTS = "ecodna-points";
const STORAGE_SCAN_HISTORY = "ecodna-scan-history";
const STORAGE_BADGES = "ecodna-badges";
const STORAGE_IMPACT = "ecodna-impact";
const STORAGE_PROFILE = "ecodna-profile";
const STORAGE_STREAK = "ecodna-streak";
const STORAGE_DAILY = "ecodna-daily";
const STORAGE_FRIENDS = "ecodna-friends";
const STORAGE_FRIEND_REQUESTS = "ecodna-friend-requests";
const STORAGE_FRIENDS_SEEDED = "ecodna-friends-seeded";
const STORAGE_COMMUNITIES = "ecodna-communities";
const STORAGE_CHALLENGES = "ecodna-challenges";
const STORAGE_CHALLENGES_SEEDED = "ecodna-challenges-seeded";
const STORAGE_COLLECTION = "ecodna-collection";
const STORAGE_CUSTOMIZATIONS = "ecodna-customizations";
const STORAGE_EQUIPPED = "ecodna-equipped";
const STORAGE_LAST_WANDERER = "ecodna-last-wanderer";
const STORAGE_WANDERER_QUEST = "ecodna-wanderer-quest";
const STORAGE_WANDERER_SESSION = "ecodna-wanderer-session";
const STORAGE_PRIZE_INDEX = "ecodna-prize-index";
const STORAGE_QUESTS = "ecodna-quests";

const WANDERER_COOLDOWN_MS = 15 * 60 * 1000;
const WANDERER_ACTIVE_MIN_MS = 5 * 60 * 1000;
const WANDERER_ACTIVE_MAX_MS = 10 * 60 * 1000;
const WANDERER_SCAN_CHANCE = 0.18;

const WANDERERS = [
  { id: "trash-panda", emoji: "🦝", name: "Trash Panda", greeting: "Hey! Can you help me with 2 quick eco actions?" },
  { id: "terra-turtle", emoji: "🐢", name: "Terra Turtle", greeting: "Shell yeah! Got time for a few eco tasks?" },
  { id: "pollen-pixie", emoji: "🦋", name: "Pollen Pixie", greeting: "Flutter by! Can you lend a hand with eco actions?" },
];

const ECO_ACTIONS = [
  { id: "lights", icon: "💡", name: "Turn off unused lights", minutes: 1, points: 5 },
  { id: "reusable-bag", icon: "🛍️", name: "Use a reusable bag today", minutes: 2, points: 8 },
  { id: "compost", icon: "🥗", name: "Compost food scraps", minutes: 5, points: 10 },
  { id: "walk", icon: "🚶", name: "Walk instead of drive", minutes: 10, points: 15 },
  { id: "recycle-new", icon: "♻️", name: "Recycle something new", minutes: 3, points: 10 },
  { id: "water-bottle", icon: "🚰", name: "Use a refillable water bottle", minutes: 2, points: 7 },
  { id: "meatless", icon: "🥬", name: "Try a meatless meal today", minutes: 5, points: 12 },
  { id: "shorter-shower", icon: "🚿", name: "Take a shorter shower", minutes: 3, points: 8 },
];

const CUSTOMIZATION_PRIZES = [
  { id: "frame-leaf", type: "frame", name: "Leaf Wreath Frame", cssClass: "frame-leaf", preview: "🌿" },
  { id: "frame-gold", type: "frame", name: "Gold Ring Frame", cssClass: "frame-gold", preview: "✨" },
  { id: "frame-neon", type: "frame", name: "Neon Glow Frame", cssClass: "frame-neon", preview: "💫" },
  { id: "frame-pixel", type: "frame", name: "Pixel Border Frame", cssClass: "frame-pixel", preview: "▦" },
  { id: "acc-leaf", type: "accessory", name: "Leaf Badge", emoji: "🌿" },
  { id: "acc-star", type: "accessory", name: "Star Badge", emoji: "⭐" },
  { id: "acc-trophy", type: "accessory", name: "Trophy Badge", emoji: "🏆" },
  { id: "acc-recycle", type: "accessory", name: "Recycle Badge", emoji: "♻️" },
  { id: "accent-ocean", type: "accent", name: "Ocean Blue", color: "#0c4a6e" },
  { id: "accent-sunset", type: "accent", name: "Sunset Orange", color: "#ea580c" },
  { id: "accent-midnight", type: "accent", name: "Midnight Purple", color: "#5b21b6" },
  { id: "accent-cherry", type: "accent", name: "Cherry Blossom", color: "#f472b6" },
  { id: "bg-leaves", type: "background", name: "Leaf Pattern", cssClass: "profile-bg-leaves" },
  { id: "bg-dots", type: "background", name: "Eco Dots", cssClass: "profile-bg-dots" },
  { id: "bg-waves", type: "background", name: "Ocean Waves", cssClass: "profile-bg-waves" },
  { id: "bg-grid", type: "background", name: "Forest Grid", cssClass: "profile-bg-grid" },
];

const FRAME_CLASSES = ["frame-leaf", "frame-gold", "frame-neon", "frame-pixel"];
const BACKGROUND_CLASSES = ["profile-bg-leaves", "profile-bg-dots", "profile-bg-waves", "profile-bg-grid"];

const BASE_POINTS = 10;
const DAILY_SCAN_GOAL = 3;

const RARITY_BONUS = {
  common: 5,
  uncommon: 10,
  rare: 20,
  epic: 50,
};

const DISPOSAL_POINTS_BY_RARITY = {
  common: 15,
  uncommon: 20,
  rare: 25,
  epic: 30,
};

const DISCOVERY_POINT = 1;
const WRONG_DISPOSAL_POINTS = 2;
const REUSE_BONUS_POINTS = 20;

const UPCYCLE_FALLBACK_BY_KEYWORD = [
  { match: /plastic.*bottle|pet bottle|water bottle|soda bottle/i, ideas: ["Cut into planters", "Bird feeder", "Storage containers", "Self-watering garden pots"] },
  { match: /glass.*jar|mason jar|jam jar|pickle jar/i, ideas: ["Candle holder", "Spice storage", "Terrarium", "Desk organizer"] },
  { match: /cardboard|corrugated|shipping box|cereal box/i, ideas: ["Drawer organizer", "Cat scratcher", "Seed starter pots", "Kids craft projects"] },
  { match: /tin can|aluminum can|soda can|beer can/i, ideas: ["Pen holder", "Wind chimes", "Mini herb planters", "Lantern with holes punched"] },
  { match: /t-?shirt|old shirt|fabric scrap/i, ideas: ["Cleaning rags", "Tote bag (no-sew)", "Quilt patches", "Plant ties"] },
];

const UPCYCLE_FALLBACK_BY_CATEGORY = {
  recyclable: ["Turn into storage containers", "Create art or home decor", "Donate to a makerspace", "Use as planters or organizers"],
  compostable: ["Paper mache crafts", "Mulch for garden beds", "Seed starter pots", "Natural packing material"],
  landfill: ["Repurpose as storage", "Craft into organizers", "Donate if still usable", "Transform into art projects"],
  hazardous: ["Check community swap groups first", "Contact safe reuse programs", "Never DIY with hazardous contents", "Repurpose only after proper emptying"],
  reusable: ["Refresh with paint or fabric", "Convert to a new household item", "Gift to someone who needs it", "Combine with other materials for crafts"],
  electronic: ["Donate to e-waste art programs", "Salvage parts for DIY projects", "Check maker spaces for component reuse", "Turn casing into storage"],
};

const TUTORIAL_STEPS_BY_KEYWORD = [
  {
    match: /planter|plant pot|flower pot|garden pot|herb pot/i,
    steps: ["Clean the container inside and out", "Cut or drill 3–5 small drainage holes in the bottom", "Add a layer of pebbles or broken pottery at the bottom", "Fill with potting mix, leaving 2 cm from the top", "Plant seeds or seedlings, water gently, and place in sunlight"],
    materials: ["Scissors or drill", "Potting soil", "Small pebbles", "Seeds or seedlings"],
    difficulty: "Easy",
    timeEstimate: "15 min",
  },
  {
    match: /bird feeder/i,
    steps: ["Clean the container and let it dry completely", "Cut a 3 cm opening for birds to access food", "Poke two holes near the top for hanging string", "Thread string through holes and tie a secure knot", "Fill with bird seed and hang in a sheltered outdoor spot"],
    materials: ["Scissors or craft knife", "String or wire", "Bird seed"],
    difficulty: "Easy",
    timeEstimate: "20 min",
  },
  {
    match: /candle|lantern/i,
    steps: ["Clean the container and remove any labels", "Place a tea-light or votive candle inside", "Optionally punch decorative holes for a lantern effect", "Set on a heat-safe surface before lighting", "Never leave burning candles unattended"],
    materials: ["Tea-light or votive candle", "Nail and hammer (for holes, optional)"],
    difficulty: "Easy",
    timeEstimate: "10 min",
  },
  {
    match: /terrarium/i,
    steps: ["Clean the glass container thoroughly", "Add a 3 cm layer of pebbles for drainage", "Add a thin layer of activated charcoal", "Fill with potting mix suitable for small plants", "Plant moss, succulents, or air plants", "Mist lightly and keep in indirect light"],
    materials: ["Pebbles", "Activated charcoal", "Potting soil", "Small plants or moss"],
    difficulty: "Medium",
    timeEstimate: "30 min",
  },
  {
    match: /organizer|storage|pen holder|pencil holder/i,
    steps: ["Clean the container and remove any labels", "Sand rough edges if needed", "Optionally paint or wrap in craft paper to decorate", "Let paint dry completely before use", "Place on desk or shelf to store items"],
    materials: ["Sandpaper (if needed)", "Paint or craft paper (optional)", "Brush"],
    difficulty: "Easy",
    timeEstimate: "15 min",
  },
  {
    match: /tote bag|bag|no.?sew/i,
    steps: ["Lay the fabric item flat and mark your cutting lines", "Cut away sleeves and neckline if using a shirt", "Cut fringe strips along the bottom edge", "Tie pairs of fringe strips together to seal the bottom", "Optionally reinforce handles with extra fabric"],
    materials: ["Scissors", "Fabric marker"],
    difficulty: "Easy",
    timeEstimate: "20 min",
  },
  {
    match: /seed starter|seedling|compost/i,
    steps: ["Tear or cut container into small open-top cups", "Fill each cup with seed-starting mix", "Press 1–2 seeds into each cup", "Water gently and cover loosely with plastic wrap", "Place in a warm, bright spot and remove wrap once sprouted"],
    materials: ["Seed-starting mix", "Seeds", "Plastic wrap"],
    difficulty: "Easy",
    timeEstimate: "15 min",
  },
  {
    match: /wind chime/i,
    steps: ["Clean all pieces and let them dry", "Punch or drill hanging holes in each piece", "Cut string into equal lengths", "Tie each piece to a horizontal rod or stick", "Attach a top loop for hanging outdoors"],
    materials: ["String or fishing line", "Drill or nail", "Stick or dowel"],
    difficulty: "Medium",
    timeEstimate: "25 min",
  },
  {
    match: /self.?watering/i,
    steps: ["Cut the bottle in half", "Invert the top half into the bottom half", "Thread a cotton wick through the bottle cap", "Fill the bottom with water", "Fill the top with soil and plant your seedling"],
    materials: ["Scissors", "Cotton cord or fabric strip", "Soil", "Seedling"],
    difficulty: "Easy",
    timeEstimate: "15 min",
  },
  {
    match: /drawer organizer|divider/i,
    steps: ["Collect several containers of similar height", "Arrange them in a drawer to test fit", "Glue containers together using hot glue", "Let dry for 30 minutes", "Place in drawer and organize items inside"],
    materials: ["Hot glue gun", "Multiple containers"],
    difficulty: "Easy",
    timeEstimate: "20 min",
  },
  {
    match: /art|decor|craft/i,
    steps: ["Clean and dry the item", "Sketch your design or decoration idea", "Paint with acrylic paint or cover with fabric", "Add embellishments like twine, buttons, or stickers", "Seal with a clear coat if desired"],
    materials: ["Acrylic paint", "Brush", "Twine or embellishments (optional)", "Clear sealant"],
    difficulty: "Medium",
    timeEstimate: "40 min",
  },
];

const TUTORIAL_GENERIC_STEPS = {
  steps: ["Clean the item thoroughly and let it dry", "Plan your upcycle idea with a quick sketch", "Gather the materials you'll need", "Follow the upcycle plan step by step", "Display, use, or gift your finished creation"],
  materials: ["Scissors", "Craft glue", "Paint or markers (optional)"],
  difficulty: "Easy",
  timeEstimate: "20 min",
};

const DISPOSAL_DISPLAY_NAMES = {
  recycle: "recycling",
  compost: "compost",
  landfill: "landfill",
  hazardous: "hazardous",
  reuse: "reuse",
};

const RARITY_ORDER = ["common", "uncommon", "rare", "epic"];

const RARITY_LABELS = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  epic: "Epic",
};

const CATEGORY_BONUS = {
  recyclable: 15,
  compostable: 12,
  reusable: 10,
  electronic: 8,
  landfill: 3,
  hazardous: 5,
};

const DEFAULT_WEIGHT_BY_CATEGORY = {
  recyclable: 25,
  compostable: 80,
  reusable: 150,
  electronic: 200,
  landfill: 30,
  hazardous: 50,
};

const CO2_KG_PER_KG_WASTE = 2.1;

const LEVEL_THRESHOLDS = [0, 50, 150, 300, 500];

const WORLD_IMAGES = {
  1: "assets/worlds/wasteland.png",
  2: "assets/worlds/recycling-reef.png",
  3: "assets/worlds/compost-canyon.png",
  4: "assets/worlds/zero-waste-nebula.png",
  5: "assets/worlds/enchanted-forest.png",
};

const WORLDS = [
  {
    level: 1,
    name: "Wasteland",
    emoji: "🏜️",
    image: WORLD_IMAGES[1],
    desc: "A barren starting zone — every scan reclaims this forgotten terrain.",
    bgStart: "#2a2218",
    bgMid: "#4a3f2f",
    bgEnd: "#6b5a42",
    accent: "#d4a574",
    sidebar: "#1a1510",
    sidebarLight: "#2a2218",
    cream: "#f5f0e8",
    creamDark: "#e8dfd0",
    heroGreen: "#4a3f2f",
    mint: "#d4a574",
    mintDark: "#b8894f",
    greenPill: "#f0e4d0",
    nextFeature: "Recycling streams emerge",
  },
  {
    level: 2,
    name: "Recycling Reef",
    emoji: "🪸",
    image: WORLD_IMAGES[2],
    desc: "Coral structures bloom from diverted recyclables beneath turquoise waves.",
    bgStart: "#0a1628",
    bgMid: "#0c4a6e",
    bgEnd: "#155e75",
    accent: "#22d3ee",
    sidebar: "#061018",
    sidebarLight: "#0a2030",
    cream: "#eef6f8",
    creamDark: "#d8ecf0",
    heroGreen: "#0c4a6e",
    mint: "#22d3ee",
    mintDark: "#0891b2",
    greenPill: "#cffafe",
    nextFeature: "Compost gardens flourish",
  },
  {
    level: 3,
    name: "Compost Canyon",
    emoji: "🌿",
    image: WORLD_IMAGES[3],
    desc: "Organic matter nourishes lush canyon ecosystems and winding trails.",
    bgStart: "#0f1a0f",
    bgMid: "#14532d",
    bgEnd: "#166534",
    accent: "#86efac",
    sidebar: "#0a120a",
    sidebarLight: "#142814",
    cream: "#f0f5ee",
    creamDark: "#dce8d8",
    heroGreen: "#14532d",
    mint: "#86efac",
    mintDark: "#4ade80",
    greenPill: "#dcfce7",
    nextFeature: "Zero-waste nebula forms",
  },
  {
    level: 4,
    name: "Zero-Waste Nebula",
    emoji: "✨",
    image: WORLD_IMAGES[4],
    desc: "A cosmic frontier where nothing goes to waste — stars of sustainability.",
    bgStart: "#0f0a1a",
    bgMid: "#4c1d95",
    bgEnd: "#6d28d9",
    accent: "#c4b5fd",
    sidebar: "#0a0612",
    sidebarLight: "#1a1030",
    cream: "#f3f0fa",
    creamDark: "#e4ddf5",
    heroGreen: "#4c1d95",
    mint: "#c4b5fd",
    mintDark: "#8b5cf6",
    greenPill: "#ede9fe",
    nextFeature: "Enchanted forest awakens",
  },
  {
    level: 5,
    name: "Enchanted Forest",
    emoji: "🌳",
    image: WORLD_IMAGES[5],
    desc: "The pinnacle — a restored paradise of circular living and ancient trees.",
    bgStart: "#0a1a12",
    bgMid: "#064e3b",
    bgEnd: "#047857",
    accent: "#34d399",
    sidebar: "#061410",
    sidebarLight: "#0a2018",
    cream: "#eef5f1",
    creamDark: "#d8ebe0",
    heroGreen: "#064e3b",
    mint: "#34d399",
    mintDark: "#10b981",
    greenPill: "#d1fae5",
    nextFeature: "Ancient ruins revealed",
  },
];

const WORLD_QUESTS = [
  {
    worldNum: 1,
    quests: [
      { id: "scan-first",  icon: "📷", name: "Scan your first item",              goal: 1  },
      { id: "dispose-3",   icon: "♻️", name: "Correctly dispose of 3 items",      goal: 3  },
      { id: "collect-2",   icon: "⭐", name: "Discover 2 new collectibles",        goal: 2  },
      { id: "streak-2",    icon: "🔥", name: "Reach a 2-day scan streak",          goal: 2  },
    ],
  },
  {
    worldNum: 2,
    quests: [
      { id: "plastic-10",      icon: "🥤", name: "Scan 10 plastic items",              goal: 10 },
      { id: "recycle-5",       icon: "♻️", name: "Correctly recycle 5 items",          goal: 5  },
      { id: "unlock-uncommon", icon: "💎", name: "Unlock 1 Uncommon collectible",       goal: 1  },
      { id: "lifecycle-3",     icon: "🔄", name: "View the lifecycle of 3 items",       goal: 3  },
      { id: "upcycle-2",       icon: "🛠️", name: "Use the upcycle guide on 2 items",   goal: 2  },
    ],
  },
  {
    worldNum: 3,
    quests: [
      { id: "organic-5",   icon: "🥗", name: "Scan 5 compostable items",             goal: 5  },
      { id: "compost-3",   icon: "🌱", name: "Correctly compost 3 items",             goal: 3  },
      { id: "collect-10",  icon: "⭐", name: "Discover 10 total collectibles",         goal: 10 },
      { id: "wanderer-1",  icon: "🦝", name: "Complete a wanderer quest",              goal: 1  },
      { id: "category-3",  icon: "📂", name: "Scan 3 different item categories",       goal: 3  },
    ],
  },
  {
    worldNum: 4,
    quests: [
      { id: "scan-25",     icon: "📷", name: "Scan 25 total items",                   goal: 25 },
      { id: "dispose-15",  icon: "♻️", name: "Correctly dispose of 15 items",         goal: 15 },
      { id: "unlock-rare", icon: "💜", name: "Unlock 1 Rare collectible",              goal: 1  },
      { id: "badges-3",    icon: "🏅", name: "Earn 3 badges",                          goal: 3  },
      { id: "friend-1",    icon: "👫", name: "Add or invite a friend",                 goal: 1  },
    ],
  },
  {
    worldNum: 5,
    quests: [
      { id: "scan-50",     icon: "📷", name: "Scan 50 total items",                   goal: 50 },
      { id: "collect-20",  icon: "⭐", name: "Discover 20 collectibles",               goal: 20 },
      { id: "dispose-30",  icon: "♻️", name: "Correctly dispose of 30 items",         goal: 30 },
      { id: "unlock-epic", icon: "🌟", name: "Unlock 1 Epic collectible",              goal: 1  },
      { id: "world4-auto", icon: "✅", name: "Complete all World 4 quests",            goal: 1  },
    ],
  },
];

const AVATAR_GROUPS = [
  {
    label: "Bins",
    options: ["🗑️", "♻️", "🪣", "🚮", "🗂️"],
  },
  {
    label: "Creatures",
    options: ["🦝", "🐢", "🦋", "🌱", "🍃"],
  },
  {
    label: "Heroes",
    options: ["🧑‍🌾", "🧑‍🔬", "🌍", "⚡", "🏆"],
  },
  {
    label: "Fun",
    options: ["🤖", "🦸", "🧙", "🌊", "✨"],
  },
];

const FUN_FACT_FALLBACKS = [
  "Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
  "Glass is 100% recyclable and can be recycled endlessly without loss of quality.",
  "Plastic bottles can take up to 450 years to decompose in a landfill.",
  "Composting food scraps reduces methane emissions from landfills.",
  "The average person generates about 4.9 pounds of trash per day.",
  "Recycling paper saves trees — one ton of recycled paper saves 17 trees.",
  "E-waste contains valuable metals like gold and copper that can be recovered.",
  "A single plastic bag can take 1,000 years to break down in the environment.",
  "Upcycling keeps materials in use longer and reduces the need for new resources.",
  "Organic waste in landfills produces methane, a greenhouse gas 25× more potent than CO₂.",
];

const BADGES = [
  { id: "first_scan", emoji: "🔬", name: "First Scan", desc: "Complete your first identification" },
  { id: "scans_5", emoji: "📡", name: "Field Agent", desc: "Complete 5 scans" },
  { id: "scans_10", emoji: "🛰️", name: "Eco Analyst", desc: "Complete 10 scans" },
  { id: "scans_25", emoji: "🌍", name: "Planet Scanner", desc: "Complete 25 scans" },
  { id: "points_100", emoji: "⭐", name: "Century Club", desc: "Earn 100 points" },
  { id: "points_500", emoji: "💎", name: "Eco Elite", desc: "Earn 500 points" },
  { id: "first_recyclable", emoji: "♻️", name: "Recycler", desc: "Identify your first recyclable" },
  { id: "first_compostable", emoji: "🌱", name: "Composter", desc: "Identify compostable waste" },
  { id: "waste_1kg", emoji: "⚖️", name: "Diverted 1 kg", desc: "Divert 1 kg of waste" },
  { id: "waste_5kg", emoji: "🏆", name: "Waste Warrior", desc: "Divert 5 kg of waste" },
];

const DEMO_USERS = [
  { handle: "@mayagreen", name: "Maya Green", badge: "Forest Elder", streak: 22, points: 2840, color: "#6b8e6b", initial: "M" },
  { handle: "@sampark", name: "Sam Park", badge: "Green Champ", streak: 14, points: 2100, color: "#4a7c59", initial: "S" },
  { handle: "@priyaearth", name: "Priya Nair", badge: "Eco Guardian", streak: 18, points: 1950, color: "#8fbc8f", initial: "P" },
  { handle: "@jordanlee", name: "Jordan Lee", badge: "Recycler", streak: 9, points: 1420, color: "#5c8a6b", initial: "J" },
  { handle: "@sofiareyes", name: "Sofia Reyes", badge: "Sprout", streak: 11, points: 1280, color: "#7cb87c", initial: "S" },
  { handle: "@marcusgreen", name: "Marcus Chen", badge: "Composter", streak: 8, points: 980, color: "#4a7c59", initial: "M" },
];

const DEMO_ACTIVITY = [
  { name: "Maya Green", handle: "@mayagreen", badge: "Forest Elder", action: "Scanned 3 recyclable items today ✓", time: "2 hr ago", points: 2840, color: "#6b8e6b", initial: "M" },
  { name: "Sam Park", handle: "@sampark", badge: "Green Champ", action: "Completed 7-day scan streak 🔥", time: "5 hr ago", points: 2100, color: "#4a7c59", initial: "S" },
  { name: "Priya Nair", handle: "@priyaearth", badge: "Eco Guardian", action: "Leveled up to Compost Canyon 🌿", time: "Yesterday", points: 1950, color: "#8fbc8f", initial: "P" },
  { name: "Jordan Lee", handle: "@jordanlee", badge: "Recycler", action: "Earned the Recycler badge ♻️", time: "Yesterday", points: 1420, color: "#5c8a6b", initial: "J" },
];

const DEMO_SUGGESTIONS = [
  { name: "Elena Wu", handle: "@elenawu", color: "#8fbc8f", initial: "E" },
  { name: "Tom Baker", handle: "@tombaker", color: "#5c8a6b", initial: "T" },
  { name: "Luna Park", handle: "@lunapark", color: "#6b8e6b", initial: "L" },
];

const COMMUNITY_CATALOG = [
  {
    id: "campus-recyclers",
    name: "Campus Recyclers",
    icon: "🏫",
    members: 847,
    membersLabel: "847 members",
    description: "Students and staff turning campuses into zero-waste zones — one bin at a time.",
    activity: [
      { user: "Maya Green", action: "Hit a 14-day scan streak", time: "1 hr ago" },
      { user: "Jordan Lee", action: "Collected 3 new catalog items", time: "3 hr ago" },
      { user: "Priya Nair", action: "Joined the 500-scan community goal", time: "Yesterday" },
    ],
    leaderboard: [
      { name: "Maya Green", points: 2840, initial: "M", color: "#6b8e6b" },
      { name: "Sam Park", points: 2100, initial: "S", color: "#4a7c59" },
      { name: "Priya Nair", points: 1950, initial: "P", color: "#8fbc8f" },
      { name: "Jordan Lee", points: 1420, initial: "J", color: "#5c8a6b" },
      { name: "Sofia Reyes", points: 1280, initial: "S", color: "#7cb87c" },
    ],
  },
  {
    id: "zero-waste-nyc",
    name: "Zero Waste NYC",
    icon: "🗽",
    members: 2100,
    membersLabel: "2.1k members",
    description: "Urban eco warriors reducing landfill trips across the five boroughs.",
    activity: [
      { user: "Tom Baker", action: "Diverted 2 kg of waste this week", time: "2 hr ago" },
      { user: "Elena Wu", action: "Earned the Recycler badge", time: "5 hr ago" },
      { user: "Marcus Chen", action: "Completed a friend challenge", time: "Yesterday" },
    ],
    leaderboard: [
      { name: "Elena Wu", points: 1760, initial: "E", color: "#8fbc8f" },
      { name: "Tom Baker", points: 1540, initial: "T", color: "#5c8a6b" },
      { name: "Luna Park", points: 1320, initial: "L", color: "#6b8e6b" },
      { name: "Marcus Chen", points: 980, initial: "M", color: "#4a7c59" },
      { name: "Sofia Reyes", points: 1280, initial: "S", color: "#7cb87c" },
    ],
  },
  {
    id: "compost-crew",
    name: "Compost Crew",
    icon: "🌱",
    members: 412,
    membersLabel: "412 members",
    description: "Organic matter enthusiasts sharing compost tips and garden wins.",
    activity: [
      { user: "Sam Park", action: "Scanned 5 compostable items today", time: "4 hr ago" },
      { user: "Maya Green", action: "Shared a composting tip", time: "Yesterday" },
    ],
    leaderboard: [
      { name: "Sam Park", points: 2100, initial: "S", color: "#4a7c59" },
      { name: "Maya Green", points: 2840, initial: "M", color: "#6b8e6b" },
      { name: "Priya Nair", points: 1950, initial: "P", color: "#8fbc8f" },
    ],
  },
  {
    id: "ocean-guardians",
    name: "Ocean Guardians",
    icon: "🌊",
    members: 1500,
    membersLabel: "1.5k members",
    description: "Protecting marine life by tracking plastic waste and coastal cleanups.",
    activity: [
      { user: "Priya Nair", action: "Collected 8 plastic items this week", time: "2 hr ago" },
      { user: "Jordan Lee", action: "Joined the plastic collection challenge", time: "Yesterday" },
    ],
    leaderboard: [
      { name: "Priya Nair", points: 1950, initial: "P", color: "#8fbc8f" },
      { name: "Maya Green", points: 2840, initial: "M", color: "#6b8e6b" },
      { name: "Jordan Lee", points: 1420, initial: "J", color: "#5c8a6b" },
    ],
  },
  {
    id: "green-thumbs",
    name: "Green Thumbs Guild",
    icon: "🪴",
    members: 623,
    membersLabel: "623 members",
    description: "Gardeners and plant lovers turning food scraps into thriving soil.",
    activity: [
      { user: "Luna Park", action: "Earned 50 pts from garden scans", time: "6 hr ago" },
      { user: "Elena Wu", action: "Discovered a rare catalog item", time: "Yesterday" },
    ],
    leaderboard: [
      { name: "Luna Park", points: 1320, initial: "L", color: "#6b8e6b" },
      { name: "Elena Wu", points: 1760, initial: "E", color: "#8fbc8f" },
      { name: "Sam Park", points: 2100, initial: "S", color: "#4a7c59" },
    ],
  },
];

const FRIEND_CHALLENGE_TYPES = [
  { id: "most_scans", label: "Most scans this week", goal: 7, unit: "scans", days: 7, reward: 25 },
  { id: "collect_items", label: "Collect 5 new items", goal: 5, unit: "items", days: 14, reward: 25 },
  { id: "earn_points", label: "Earn 100 points", goal: 100, unit: "points", days: 7, reward: 25 },
];

const COMMUNITY_CHALLENGE_DEFS = [
  {
    id: "cc-campus-scans",
    communityId: "campus-recyclers",
    label: "500 collective scans",
    type: "collective_scans",
    communityGoal: 500,
    communityProgress: 312,
    bonusPoints: 50,
    badgeId: "scans_10",
  },
  {
    id: "cc-ocean-plastic",
    communityId: "ocean-guardians",
    label: "Collect 50 plastic items",
    type: "plastic_items",
    communityGoal: 50,
    communityProgress: 28,
    bonusPoints: 40,
    badgeId: "first_recyclable",
  },
];

const COLLECTION_CATALOG = [
  { id: "plastic-bottle", name: "Plastic Bottle", category: "Plastic", rarity: "common", emoji: "🥤", keywords: ["plastic bottle", "water bottle", "pet bottle", "soda bottle"] },
  { id: "plastic-bag", name: "Plastic Bag", category: "Plastic", rarity: "common", emoji: "🛍️", keywords: ["plastic bag", "grocery bag", "shopping bag", "poly bag"] },
  { id: "plastic-container", name: "Plastic Container", category: "Plastic", rarity: "uncommon", emoji: "🫙", keywords: ["plastic container", "tupperware", "food container", "takeout container"] },
  { id: "yogurt-cup", name: "Yogurt Cup", category: "Plastic", rarity: "common", emoji: "🥛", keywords: ["yogurt cup", "yoghurt", "dairy cup", "single serve cup"] },
  { id: "plastic-straw", name: "Plastic Straw", category: "Plastic", rarity: "common", emoji: "🥤", keywords: ["plastic straw", "drinking straw", "straw"] },
  { id: "shampoo-bottle", name: "Shampoo Bottle", category: "Plastic", rarity: "common", emoji: "🧴", keywords: ["shampoo bottle", "conditioner bottle", "body wash", "lotion bottle"] },
  { id: "plastic-lid", name: "Plastic Lid", category: "Plastic", rarity: "common", emoji: "🔵", keywords: ["plastic lid", "bottle cap", "container lid"] },
  { id: "six-pack-rings", name: "Six-Pack Rings", category: "Plastic", rarity: "uncommon", emoji: "⭕", keywords: ["six pack rings", "can rings", "plastic rings", "beverage rings"] },
  { id: "aluminum-can", name: "Aluminum Can", category: "Metal", rarity: "common", emoji: "🥫", keywords: ["aluminum can", "aluminium can", "soda can", "beer can", "beverage can"] },
  { id: "steel-can", name: "Steel Can", category: "Metal", rarity: "uncommon", emoji: "🥫", keywords: ["steel can", "tin can", "soup can", "food can"] },
  { id: "aluminum-foil", name: "Aluminum Foil", category: "Metal", rarity: "common", emoji: "📄", keywords: ["aluminum foil", "aluminium foil", "tin foil", "foil wrap"] },
  { id: "metal-lid", name: "Metal Lid", category: "Metal", rarity: "uncommon", emoji: "🔩", keywords: ["metal lid", "jar lid", "can lid", "bottle cap metal"] },
  { id: "aerosol-can-metal", name: "Aerosol Can", category: "Metal", rarity: "rare", emoji: "🧴", keywords: ["aerosol can", "spray can", "deodorant can"] },
  { id: "wire-hanger", name: "Wire Hanger", category: "Metal", rarity: "uncommon", emoji: "🪝", keywords: ["wire hanger", "metal hanger", "clothes hanger"] },
  { id: "cardboard-box", name: "Cardboard Box", category: "Paper", rarity: "common", emoji: "📦", keywords: ["cardboard box", "shipping box", "corrugated box", "moving box"] },
  { id: "newspaper", name: "Newspaper", category: "Paper", rarity: "common", emoji: "📰", keywords: ["newspaper", "news print", "daily paper"] },
  { id: "office-paper", name: "Office Paper", category: "Paper", rarity: "common", emoji: "📄", keywords: ["office paper", "printer paper", "copy paper", "white paper"] },
  { id: "pizza-box", name: "Pizza Box", category: "Paper", rarity: "uncommon", emoji: "🍕", keywords: ["pizza box", "takeout box", "food box paper"] },
  { id: "paper-bag", name: "Paper Bag", category: "Paper", rarity: "common", emoji: "🛍️", keywords: ["paper bag", "brown bag", "lunch bag"] },
  { id: "egg-carton", name: "Egg Carton", category: "Paper", rarity: "common", emoji: "🥚", keywords: ["egg carton", "egg box", "pulp carton"] },
  { id: "magazine", name: "Magazine", category: "Paper", rarity: "uncommon", emoji: "📖", keywords: ["magazine", "catalog", "brochure", "glossy paper"] },
  { id: "glass-jar", name: "Glass Jar", category: "Glass", rarity: "uncommon", emoji: "🫙", keywords: ["glass jar", "mason jar", "preserving jar", "jam jar"] },
  { id: "glass-bottle", name: "Glass Bottle", category: "Glass", rarity: "common", emoji: "🍾", keywords: ["glass bottle", "beer bottle", "soda bottle glass"] },
  { id: "wine-bottle", name: "Wine Bottle", category: "Glass", rarity: "rare", emoji: "🍷", keywords: ["wine bottle", "liquor bottle", "spirit bottle"] },
  { id: "broken-glass", name: "Broken Glass", category: "Glass", rarity: "rare", emoji: "⚠️", keywords: ["broken glass", "shattered glass", "glass shards"] },
  { id: "light-bulb-glass", name: "Glass Light Bulb", category: "Glass", rarity: "rare", emoji: "💡", keywords: ["incandescent bulb", "glass bulb", "light bulb glass"] },
  { id: "banana-peel", name: "Banana Peel", category: "Organic", rarity: "common", emoji: "🍌", keywords: ["banana peel", "banana skin", "banana"] },
  { id: "apple-core", name: "Apple Core", category: "Organic", rarity: "common", emoji: "🍎", keywords: ["apple core", "apple", "fruit core"] },
  { id: "coffee-grounds", name: "Coffee Grounds", category: "Organic", rarity: "common", emoji: "☕", keywords: ["coffee grounds", "used coffee", "coffee filter"] },
  { id: "tea-bag", name: "Tea Bag", category: "Organic", rarity: "common", emoji: "🍵", keywords: ["tea bag", "used tea", "loose tea"] },
  { id: "food-scraps", name: "Food Scraps", category: "Organic", rarity: "common", emoji: "🥗", keywords: ["food scraps", "kitchen waste", "leftover food", "plate scrapings"] },
  { id: "eggshell", name: "Eggshell", category: "Organic", rarity: "common", emoji: "🥚", keywords: ["eggshell", "egg shell", "crushed eggshell"] },
  { id: "grass-clippings", name: "Grass Clippings", category: "Organic", rarity: "uncommon", emoji: "🌱", keywords: ["grass clippings", "lawn trimmings", "yard waste"] },
  { id: "leaf-pile", name: "Leaf Pile", category: "Organic", rarity: "uncommon", emoji: "🍂", keywords: ["leaves", "leaf pile", "fallen leaves", "yard leaves"] },
  { id: "old-phone", name: "Old Phone", category: "Electronic", rarity: "rare", emoji: "📱", keywords: ["old phone", "cell phone", "smartphone", "mobile phone", "e-waste phone"] },
  { id: "laptop", name: "Laptop", category: "Electronic", rarity: "rare", emoji: "💻", keywords: ["laptop", "notebook computer", "old computer"] },
  { id: "battery", name: "Battery", category: "Electronic", rarity: "rare", emoji: "🔋", keywords: ["battery", "aa battery", "lithium battery", "rechargeable battery"] },
  { id: "light-bulb", name: "Light Bulb", category: "Electronic", rarity: "uncommon", emoji: "💡", keywords: ["light bulb", "led bulb", "cfl bulb", "fluorescent bulb"] },
  { id: "charger-cable", name: "Charger Cable", category: "Electronic", rarity: "uncommon", emoji: "🔌", keywords: ["charger", "charging cable", "usb cable", "power cord"] },
  { id: "headphones", name: "Headphones", category: "Electronic", rarity: "rare", emoji: "🎧", keywords: ["headphones", "earbuds", "electronic accessory"] },
  { id: "old-tshirt", name: "Old T-Shirt", category: "Textile", rarity: "uncommon", emoji: "👕", keywords: ["old t-shirt", "t shirt", "shirt", "cotton shirt", "worn clothing"] },
  { id: "jeans", name: "Jeans", category: "Textile", rarity: "uncommon", emoji: "👖", keywords: ["jeans", "denim", "old pants", "trousers"] },
  { id: "shoes", name: "Shoes", category: "Textile", rarity: "rare", emoji: "👟", keywords: ["shoes", "sneakers", "old footwear", "running shoes"] },
  { id: "towel", name: "Towel", category: "Textile", rarity: "uncommon", emoji: "🧖", keywords: ["towel", "old towel", "bath towel", "linens"] },
  { id: "bedding", name: "Bedding", category: "Textile", rarity: "rare", emoji: "🛏️", keywords: ["bedding", "sheets", "blanket", "comforter", "pillow"] },
  { id: "paint-can", name: "Paint Can", category: "Hazardous", rarity: "epic", emoji: "🎨", keywords: ["paint can", "latex paint", "house paint", "paint container"] },
  { id: "motor-oil", name: "Motor Oil", category: "Hazardous", rarity: "epic", emoji: "🛢️", keywords: ["motor oil", "engine oil", "used oil", "automotive oil"] },
  { id: "medicine", name: "Medicine", category: "Hazardous", rarity: "epic", emoji: "💊", keywords: ["medicine", "pill bottle", "expired medication", "pharmaceutical"] },
  { id: "cleaning-chemical", name: "Cleaning Chemical", category: "Hazardous", rarity: "epic", emoji: "🧪", keywords: ["cleaning chemical", "bleach", "household cleaner", "disinfectant"] },
  { id: "fluorescent-tube", name: "Fluorescent Tube", category: "Hazardous", rarity: "epic", emoji: "⚡", keywords: ["fluorescent tube", "mercury bulb", "tube light"] },

  // — Plastic (new) —
  { id: "plastic-cutlery", name: "Plastic Cutlery", category: "Plastic", rarity: "common", emoji: "🍴", keywords: ["plastic fork", "plastic knife", "plastic spoon", "plastic cutlery", "disposable cutlery"] },
  { id: "foam-cup", name: "Foam Cup", category: "Plastic", rarity: "common", emoji: "🥤", keywords: ["foam cup", "styrofoam cup", "polystyrene cup", "disposable cup"] },
  { id: "bubble-wrap", name: "Bubble Wrap", category: "Plastic", rarity: "uncommon", emoji: "🫧", keywords: ["bubble wrap", "packaging bubbles", "air cushion"] },
  { id: "plastic-hanger", name: "Plastic Hanger", category: "Plastic", rarity: "common", emoji: "🪝", keywords: ["plastic hanger", "clothes hanger plastic", "closet hanger"] },
  { id: "plastic-wrap", name: "Plastic Wrap", category: "Plastic", rarity: "common", emoji: "🎁", keywords: ["plastic wrap", "cling wrap", "saran wrap", "food wrap"] },
  { id: "plastic-cup", name: "Plastic Cup", category: "Plastic", rarity: "common", emoji: "🥤", keywords: ["plastic cup", "disposable cup", "solo cup", "party cup"] },
  { id: "styrofoam-tray", name: "Styrofoam Tray", category: "Plastic", rarity: "common", emoji: "🍱", keywords: ["styrofoam tray", "meat tray", "produce tray", "foam packaging"] },
  { id: "plastic-film", name: "Plastic Film", category: "Plastic", rarity: "common", emoji: "📦", keywords: ["plastic film", "stretch wrap", "pallet wrap", "shrink wrap"] },
  { id: "toothbrush", name: "Toothbrush", category: "Plastic", rarity: "common", emoji: "🪥", keywords: ["toothbrush", "old toothbrush", "electric toothbrush head"] },
  { id: "disposable-razor", name: "Disposable Razor", category: "Plastic", rarity: "uncommon", emoji: "🪒", keywords: ["disposable razor", "razor", "shaving razor"] },

  // — Metal (new) —
  { id: "copper-wire", name: "Copper Wire", category: "Metal", rarity: "uncommon", emoji: "🔌", keywords: ["copper wire", "electrical wire", "scrap wire"] },
  { id: "metal-bottle-cap", name: "Metal Bottle Cap", category: "Metal", rarity: "common", emoji: "🔩", keywords: ["bottle cap", "metal cap", "crown cap", "soda cap"] },
  { id: "steel-wool", name: "Steel Wool", category: "Metal", rarity: "uncommon", emoji: "🧹", keywords: ["steel wool", "metal scourer", "scrubbing pad", "wire wool"] },
  { id: "aluminum-tray", name: "Aluminum Tray", category: "Metal", rarity: "common", emoji: "🫙", keywords: ["aluminum tray", "foil tray", "takeout tray", "baking tray foil"] },
  { id: "nails-screws", name: "Nails & Screws", category: "Metal", rarity: "common", emoji: "🔩", keywords: ["nails", "screws", "hardware", "metal fasteners"] },
  { id: "metal-pipe", name: "Metal Pipe", category: "Metal", rarity: "uncommon", emoji: "⚙️", keywords: ["metal pipe", "plumbing pipe", "copper pipe", "steel pipe"] },
  { id: "old-key", name: "Old Key", category: "Metal", rarity: "uncommon", emoji: "🗝️", keywords: ["old key", "key", "metal key", "house key"] },

  // — Paper (new) —
  { id: "paper-cup", name: "Paper Cup", category: "Paper", rarity: "common", emoji: "☕", keywords: ["paper cup", "coffee cup", "disposable cup paper", "takeaway cup"] },
  { id: "tissue-paper", name: "Tissue Paper", category: "Paper", rarity: "common", emoji: "🧻", keywords: ["tissue", "tissue paper", "kleenex", "facial tissue"] },
  { id: "paper-straw", name: "Paper Straw", category: "Paper", rarity: "common", emoji: "🥤", keywords: ["paper straw", "biodegradable straw", "drinking straw paper"] },
  { id: "paper-plate", name: "Paper Plate", category: "Paper", rarity: "common", emoji: "🍽️", keywords: ["paper plate", "disposable plate", "party plate"] },
  { id: "envelope", name: "Envelope", category: "Paper", rarity: "common", emoji: "✉️", keywords: ["envelope", "mailing envelope", "letter envelope"] },
  { id: "paper-towel-roll", name: "Paper Towel Roll", category: "Paper", rarity: "common", emoji: "🧻", keywords: ["paper towel", "kitchen roll", "paper towel tube", "cardboard tube"] },
  { id: "receipt", name: "Receipt", category: "Paper", rarity: "common", emoji: "🧾", keywords: ["receipt", "thermal paper", "till receipt", "store receipt"] },
  { id: "cereal-box", name: "Cereal Box", category: "Paper", rarity: "common", emoji: "📦", keywords: ["cereal box", "breakfast box", "food box cardboard"] },
  { id: "gift-wrap", name: "Gift Wrap", category: "Paper", rarity: "uncommon", emoji: "🎁", keywords: ["gift wrap", "wrapping paper", "present wrap"] },
  { id: "coffee-filter", name: "Coffee Filter", category: "Paper", rarity: "common", emoji: "☕", keywords: ["coffee filter", "paper filter", "filter paper"] },

  // — Glass (new) —
  { id: "drinking-glass", name: "Drinking Glass", category: "Glass", rarity: "uncommon", emoji: "🥛", keywords: ["drinking glass", "glass cup", "tumbler", "water glass"] },
  { id: "glass-vase", name: "Glass Vase", category: "Glass", rarity: "uncommon", emoji: "🏺", keywords: ["glass vase", "flower vase", "decorative glass"] },
  { id: "glass-tile", name: "Glass Tile", category: "Glass", rarity: "rare", emoji: "🔷", keywords: ["glass tile", "mosaic tile", "glass mosaic"] },
  { id: "mirror-piece", name: "Mirror", category: "Glass", rarity: "rare", emoji: "🪞", keywords: ["mirror", "broken mirror", "glass mirror"] },
  { id: "glass-bead", name: "Glass Bead", category: "Glass", rarity: "rare", emoji: "💎", keywords: ["glass bead", "decorative bead", "craft bead"] },

  // — Organic (new) —
  { id: "orange-peel", name: "Orange Peel", category: "Organic", rarity: "common", emoji: "🍊", keywords: ["orange peel", "citrus peel", "fruit peel"] },
  { id: "vegetable-scraps", name: "Vegetable Scraps", category: "Organic", rarity: "common", emoji: "🥦", keywords: ["vegetable scraps", "veggie peels", "food waste", "vegetable trimmings"] },
  { id: "bread-scraps", name: "Bread Scraps", category: "Organic", rarity: "common", emoji: "🍞", keywords: ["bread", "bread crust", "old bread", "stale bread"] },
  { id: "avocado-pit", name: "Avocado Pit", category: "Organic", rarity: "uncommon", emoji: "🥑", keywords: ["avocado pit", "avocado seed", "avocado stone"] },
  { id: "nutshells", name: "Nutshells", category: "Organic", rarity: "common", emoji: "🌰", keywords: ["nutshells", "walnut shell", "peanut shell", "almond shell"] },
  { id: "hair-clippings", name: "Hair Clippings", category: "Organic", rarity: "uncommon", emoji: "💇", keywords: ["hair clippings", "hair waste", "cut hair"] },
  { id: "cork", name: "Cork", category: "Organic", rarity: "uncommon", emoji: "🍷", keywords: ["cork", "wine cork", "bottle cork", "champagne cork"] },
  { id: "flower-stems", name: "Flower Stems", category: "Organic", rarity: "common", emoji: "💐", keywords: ["flower stems", "dead flowers", "cut flowers", "bouquet waste"] },
  { id: "fruit-sticker", name: "Fruit Sticker", category: "Organic", rarity: "rare", emoji: "🏷️", keywords: ["fruit sticker", "plu sticker", "produce sticker"] },

  // — Electronic (new) —
  { id: "old-remote", name: "Old Remote", category: "Electronic", rarity: "uncommon", emoji: "📺", keywords: ["remote control", "tv remote", "old remote"] },
  { id: "dead-aa-battery", name: "Dead AA Battery", category: "Electronic", rarity: "common", emoji: "🔋", keywords: ["aa battery", "dead battery", "alkaline battery", "used battery"] },
  { id: "inkjet-cartridge", name: "Ink Cartridge", category: "Electronic", rarity: "rare", emoji: "🖨️", keywords: ["ink cartridge", "inkjet cartridge", "printer ink", "toner cartridge"] },
  { id: "old-keyboard", name: "Old Keyboard", category: "Electronic", rarity: "rare", emoji: "⌨️", keywords: ["keyboard", "old keyboard", "computer keyboard", "mechanical keyboard"] },
  { id: "usb-drive", name: "USB Drive", category: "Electronic", rarity: "uncommon", emoji: "💾", keywords: ["usb drive", "flash drive", "thumb drive", "usb stick"] },
  { id: "old-printer", name: "Old Printer", category: "Electronic", rarity: "epic", emoji: "🖨️", keywords: ["printer", "old printer", "inkjet printer", "laser printer"] },
  { id: "old-earbuds", name: "Old Earbuds", category: "Electronic", rarity: "uncommon", emoji: "🎧", keywords: ["earbuds", "earphones", "in-ear headphones", "wired earbuds"] },
  { id: "circuit-board", name: "Circuit Board", category: "Electronic", rarity: "epic", emoji: "🔌", keywords: ["circuit board", "pcb", "motherboard", "electronics board"] },

  // — Textile (new) —
  { id: "socks", name: "Old Socks", category: "Textile", rarity: "common", emoji: "🧦", keywords: ["socks", "old socks", "worn socks", "hosiery"] },
  { id: "underwear", name: "Old Underwear", category: "Textile", rarity: "common", emoji: "👙", keywords: ["underwear", "old underwear", "lingerie", "boxer shorts"] },
  { id: "shoelaces", name: "Shoelaces", category: "Textile", rarity: "common", emoji: "👟", keywords: ["shoelaces", "laces", "shoe strings"] },
  { id: "wool-sweater", name: "Wool Sweater", category: "Textile", rarity: "uncommon", emoji: "🧶", keywords: ["wool sweater", "knit sweater", "jumper", "woolen clothing"] },
  { id: "bed-sheets", name: "Bed Sheets", category: "Textile", rarity: "uncommon", emoji: "🛏️", keywords: ["bed sheets", "linen", "duvet cover", "pillowcase"] },
  { id: "leather-jacket", name: "Leather Jacket", category: "Textile", rarity: "rare", emoji: "🧥", keywords: ["leather jacket", "leather coat", "faux leather", "old jacket"] },
  { id: "scarf", name: "Scarf", category: "Textile", rarity: "common", emoji: "🧣", keywords: ["scarf", "scarf fabric", "old scarf", "winter scarf"] },

  // — Rubber (new category) —
  { id: "rubber-glove", name: "Rubber Glove", category: "Rubber", rarity: "common", emoji: "🧤", keywords: ["rubber glove", "latex glove", "cleaning glove", "dishwashing glove"] },
  { id: "rubber-band", name: "Rubber Band", category: "Rubber", rarity: "common", emoji: "🔗", keywords: ["rubber band", "elastic band", "rubber ring"] },
  { id: "old-tire", name: "Old Tire", category: "Rubber", rarity: "rare", emoji: "🚗", keywords: ["old tire", "tyre", "car tire", "rubber tire"] },
  { id: "garden-hose", name: "Garden Hose", category: "Rubber", rarity: "uncommon", emoji: "💧", keywords: ["garden hose", "water hose", "rubber hose", "irrigation hose"] },
  { id: "rubber-mat", name: "Rubber Mat", category: "Rubber", rarity: "uncommon", emoji: "🟫", keywords: ["rubber mat", "floor mat", "anti-slip mat", "car mat"] },
  { id: "rubber-boot", name: "Rubber Boot", category: "Rubber", rarity: "uncommon", emoji: "🥾", keywords: ["rubber boot", "wellington boot", "rain boot", "galosh"] },
  { id: "rubber-eraser", name: "Rubber Eraser", category: "Rubber", rarity: "common", emoji: "✏️", keywords: ["rubber eraser", "eraser", "pencil eraser"] },

  // — Composite (new category) —
  { id: "chip-bag", name: "Chip Bag", category: "Composite", rarity: "common", emoji: "🍟", keywords: ["chip bag", "crisp packet", "snack bag", "foil packet"] },
  { id: "juice-box", name: "Juice Box", category: "Composite", rarity: "common", emoji: "🧃", keywords: ["juice box", "carton juice", "drink box", "capri sun"] },
  { id: "toothpaste-tube", name: "Toothpaste Tube", category: "Composite", rarity: "common", emoji: "🪥", keywords: ["toothpaste tube", "toothpaste", "dental cream tube"] },
  { id: "coffee-pod", name: "Coffee Pod", category: "Composite", rarity: "common", emoji: "☕", keywords: ["coffee pod", "k-cup", "nespresso pod", "coffee capsule"] },
  { id: "blister-pack", name: "Blister Pack", category: "Composite", rarity: "uncommon", emoji: "💊", keywords: ["blister pack", "pill blister", "medicine packaging", "clamshell pack"] },
  { id: "tetra-pak", name: "Tetra Pak", category: "Composite", rarity: "uncommon", emoji: "🥛", keywords: ["tetra pak", "carton milk", "juice carton", "long life carton"] },
  { id: "mylar-bag", name: "Mylar Bag", category: "Composite", rarity: "uncommon", emoji: "🎈", keywords: ["mylar bag", "foil bag", "metalized film", "stand-up pouch"] },
  { id: "wax-coated-cup", name: "Wax-Coated Cup", category: "Composite", rarity: "common", emoji: "🥤", keywords: ["wax cup", "coated cup", "paper cup wax", "lined cup"] },
  { id: "foil-balloon", name: "Foil Balloon", category: "Composite", rarity: "uncommon", emoji: "🎈", keywords: ["foil balloon", "mylar balloon", "helium balloon"] },
  { id: "packaging-foam", name: "Packaging Foam", category: "Composite", rarity: "common", emoji: "📦", keywords: ["packaging foam", "packing peanuts", "foam packing", "styrofoam insert"] },

  // — Hazardous (new) —
  { id: "car-battery", name: "Car Battery", category: "Hazardous", rarity: "epic", emoji: "🔋", keywords: ["car battery", "lead acid battery", "automotive battery", "vehicle battery"] },
  { id: "pool-chemicals", name: "Pool Chemicals", category: "Hazardous", rarity: "epic", emoji: "🧪", keywords: ["pool chemicals", "chlorine", "pool chlorine", "pool cleaner"] },
  { id: "spray-paint-can", name: "Spray Paint Can", category: "Hazardous", rarity: "rare", emoji: "🎨", keywords: ["spray paint", "aerosol paint", "graffiti can", "paint spray"] },
  { id: "nail-polish-bottle", name: "Nail Polish", category: "Hazardous", rarity: "uncommon", emoji: "💅", keywords: ["nail polish", "nail varnish", "nail lacquer"] },
  { id: "broken-thermometer", name: "Broken Thermometer", category: "Hazardous", rarity: "epic", emoji: "🌡️", keywords: ["thermometer", "mercury thermometer", "broken thermometer"] },
  { id: "rat-poison", name: "Rat Poison", category: "Hazardous", rarity: "epic", emoji: "☠️", keywords: ["rat poison", "rodenticide", "mouse poison", "pest control chemical"] },
  { id: "photographic-chemicals", name: "Photo Chemicals", category: "Hazardous", rarity: "epic", emoji: "📸", keywords: ["photographic chemicals", "darkroom chemicals", "photo developer", "fixer solution"] },

  // — Plastic (extra) —
  { id: "contact-lens-case", name: "Contact Lens Case", category: "Plastic", rarity: "uncommon", emoji: "👁️", keywords: ["contact lens case", "lens case", "contact case"] },
  { id: "plastic-spork", name: "Plastic Spork", category: "Plastic", rarity: "common", emoji: "🍴", keywords: ["spork", "plastic spork", "disposable spork"] },
  { id: "straw-wrapper", name: "Straw Wrapper", category: "Plastic", rarity: "common", emoji: "🥤", keywords: ["straw wrapper", "straw paper", "straw sleeve"] },

  // — Metal (extra) —
  { id: "tin-foil-ball", name: "Foil Ball", category: "Metal", rarity: "common", emoji: "⚪", keywords: ["foil ball", "crumpled foil", "scrunched foil"] },
  { id: "bike-chain", name: "Bike Chain", category: "Metal", rarity: "rare", emoji: "🚲", keywords: ["bike chain", "bicycle chain", "chain link"] },

  // — Paper (extra) —
  { id: "napkins", name: "Napkins", category: "Paper", rarity: "common", emoji: "🧻", keywords: ["napkin", "paper napkin", "serviette", "table napkin"] },
  { id: "paper-bag-lunch", name: "Lunch Bag", category: "Paper", rarity: "common", emoji: "🛍️", keywords: ["lunch bag", "paper lunch bag", "brown paper bag", "lunch sack"] },

  // — Organic (extra) —
  { id: "fish-bones", name: "Fish Bones", category: "Organic", rarity: "uncommon", emoji: "🐟", keywords: ["fish bones", "fish scraps", "seafood waste"] },
  { id: "sawdust", name: "Sawdust", category: "Organic", rarity: "uncommon", emoji: "🪵", keywords: ["sawdust", "wood shavings", "wood dust"] },

  // — Electronic (extra) —
  { id: "dead-watch-battery", name: "Watch Battery", category: "Electronic", rarity: "uncommon", emoji: "⌚", keywords: ["watch battery", "button cell", "coin battery", "cr2032"] },
  { id: "game-cartridge", name: "Game Cartridge", category: "Electronic", rarity: "rare", emoji: "🎮", keywords: ["game cartridge", "video game cartridge", "gameboy cartridge", "retro game"] },

  // — Textile (extra) —
  { id: "yoga-mat-old", name: "Yoga Mat", category: "Textile", rarity: "uncommon", emoji: "🧘", keywords: ["yoga mat", "exercise mat", "gym mat", "old mat"] },
  { id: "belt", name: "Old Belt", category: "Textile", rarity: "common", emoji: "👔", keywords: ["belt", "old belt", "leather belt", "fabric belt"] },

  // — Rubber (extra) —
  { id: "rubber-seal", name: "Rubber Gasket", category: "Rubber", rarity: "rare", emoji: "⭕", keywords: ["rubber gasket", "rubber seal", "o-ring", "plumbing seal"] },

  // — Composite (extra) —
  { id: "laminated-card", name: "Laminated Card", category: "Composite", rarity: "uncommon", emoji: "🪪", keywords: ["laminated card", "id card", "plastic card", "laminate"] },
  { id: "coated-milk-carton", name: "Milk Carton", category: "Composite", rarity: "common", emoji: "🥛", keywords: ["milk carton", "cardboard milk", "waxed carton", "dairy carton"] },
  { id: "insulation-foam", name: "Insulation Foam", category: "Composite", rarity: "uncommon", emoji: "🟧", keywords: ["insulation foam", "foam board", "rigid foam", "wall insulation"] },
  { id: "plastic-tray", name: "Plastic Produce Tray", category: "Plastic", rarity: "common", emoji: "🫙", keywords: ["plastic tray", "produce tray", "fruit tray", "vegetable tray"] },
  { id: "glass-jar-lid", name: "Glass Jar Lid", category: "Metal", rarity: "common", emoji: "🔩", keywords: ["jar lid", "mason jar lid", "canning lid", "glass jar cap"] },
  { id: "old-sunglasses", name: "Old Sunglasses", category: "Plastic", rarity: "uncommon", emoji: "🕶️", keywords: ["sunglasses", "old sunglasses", "eyewear", "shades"] },
];

const CATEGORY_EMOJI = {
  Plastic: "🥤",
  Metal: "🥫",
  Paper: "📦",
  Glass: "🫙",
  Organic: "🍌",
  Electronic: "📱",
  Textile: "👕",
  Hazardous: "⚠️",
  Rubber: "🚗",
  Composite: "🧃",
  recyclable: "♻️",
  compostable: "🌱",
  landfill: "🗑️",
  hazardous: "⚠️",
  reusable: "🔄",
  electronic: "📱",
};

const MATERIAL_CATEGORIES = ["Plastic", "Metal", "Paper", "Glass", "Organic", "Electronic", "Textile", "Hazardous", "Rubber", "Composite"];

const CATEGORY_GLOW = {
  Plastic: "#4a9eff",
  Metal: "#a8b4c4",
  Paper: "#d4a574",
  Glass: "#7dd3fc",
  Organic: "#6fcf97",
  Electronic: "#a78bfa",
  Textile: "#f472b6",
  Hazardous: "#f87171",
  Rubber: "#fb923c",
  Composite: "#fbbf24",
};

const DECOMPOSITION_TIMELINES = {
  Plastic: [
    { icon: "🥤", label: "450 years", desc: "Barely breaks down in anaerobic landfill" },
    { icon: "✂️", label: "Fragmentation", desc: "UV and pressure crack into smaller pieces" },
    { icon: "🔬", label: "Microplastics", desc: "Invisible particles spread through soil" },
    { icon: "☠️", label: "Soil contamination", desc: "Chemicals leach into groundwater" },
  ],
  Organic: [
    { icon: "🍂", label: "2–6 weeks", desc: "Anaerobic breakdown starts quickly" },
    { icon: "💨", label: "Methane release", desc: "Landfill gas traps heat 25× CO₂" },
    { icon: "🦠", label: "Slow putrefaction", desc: "Without oxygen, organic matter rots" },
    { icon: "🌍", label: "Lost nutrients", desc: "Nutrients trapped, not returned to soil" },
  ],
  Metal: [
    { icon: "🥫", label: "50–500 years", desc: "Corrosion begins but form persists" },
    { icon: "🟤", label: "Rust formation", desc: "Iron oxidizes, weakening structure" },
    { icon: "💧", label: "Metal leaching", desc: "Toxic metals enter soil and water" },
    { icon: "🏚️", label: "Landfill bulk", desc: "Heavy metals occupy space for centuries" },
  ],
  Paper: [
    { icon: "📄", label: "2–6 weeks", desc: "Cellulose fibers start breaking down" },
    { icon: "💨", label: "Methane in landfill", desc: "Wet paper rots without oxygen" },
    { icon: "🧪", label: "Ink and coating", desc: "Chemicals release as paper degrades" },
    { icon: "🌍", label: "Wasted fiber", desc: "Potential recycled fiber is lost" },
  ],
  Glass: [
    { icon: "🫙", label: "1 million years", desc: "Glass is virtually inert in landfill" },
    { icon: "💎", label: "No decomposition", desc: "Silica structure remains unchanged" },
    { icon: "🏔️", label: "Space forever", desc: "Landfill volume never recovers" },
    { icon: "⚠️", label: "Shard hazard", desc: "Broken glass risks workers and wildlife" },
  ],
  Electronic: [
    { icon: "📱", label: "Decades intact", desc: "Plastics and metals persist for generations" },
    { icon: "🔋", label: "Battery corrosion", desc: "Lithium and acid leak from cells" },
    { icon: "☠️", label: "Toxic leaching", desc: "Lead, mercury, and cadmium enter soil" },
    { icon: "💧", label: "Groundwater risk", desc: "Heavy metals contaminate drinking water" },
  ],
  Textile: [
    { icon: "👕", label: "200+ years", desc: "Synthetic fibers are near-permanent" },
    { icon: "🧵", label: "Fiber shedding", desc: "Microfibers released during breakdown" },
    { icon: "💧", label: "Dye leaching", desc: "Chemical dyes pollute soil and water" },
    { icon: "🌊", label: "Microplastic runoff", desc: "Synthetic threads reach waterways" },
  ],
  Hazardous: [
    { icon: "⚠️", label: "Indefinite hazard", desc: "Toxins remain dangerous for centuries" },
    { icon: "🧪", label: "Chemical seepage", desc: "Solvents and metals leach immediately" },
    { icon: "💧", label: "Groundwater poison", desc: "Contaminants spread underground" },
    { icon: "🌿", label: "Ecosystem damage", desc: "Plants and animals absorb toxins" },
  ],
};

const RECYCLE_OUTCOMES = {
  Plastic: [
    { icon: "♻️", label: "Sorted and cleaned", desc: "Washed, shredded, and melted down" },
    { icon: "🧵", label: "New flake", desc: "PET becomes raw plastic pellets" },
    { icon: "🥤", label: "New bottle", desc: "Or spun into polyester fiber" },
    { icon: "👕", label: "Fabric and fill", desc: "Reborn as clothing or insulation" },
  ],
  Metal: [
    { icon: "♻️", label: "Melted down", desc: "Aluminum smelted at high heat" },
    { icon: "🔥", label: "Purified", desc: "Impurities removed, alloy restored" },
    { icon: "🥫", label: "New can in 60 days", desc: "Fastest material turnaround" },
    { icon: "✈️", label: "Endless alloy", desc: "Same metal, infinite new products" },
  ],
  Paper: [
    { icon: "♻️", label: "Pulped", desc: "Soaked and broken into fiber slurry" },
    { icon: "📄", label: "De-inked", desc: "Inks and coatings are removed" },
    { icon: "📦", label: "New cardboard", desc: "Fibers pressed into fresh sheets" },
    { icon: "📰", label: "Newsprint again", desc: "Up to 7 recycling cycles possible" },
  ],
  Glass: [
    { icon: "♻️", label: "Crushed", desc: "Sorted by color and ground to cullet" },
    { icon: "🔥", label: "Remelted", desc: "Melted at 1,500°C with new raw material" },
    { icon: "🫙", label: "New jar", desc: "Same quality glass, no loss of purity" },
    { icon: "♾️", label: "Infinitely recyclable", desc: "Glass never degrades in quality" },
  ],
  Organic: [
    { icon: "🌱", label: "Collected", desc: "Food scraps diverted from landfill" },
    { icon: "🪱", label: "Composted", desc: "Microbes break down organic matter" },
    { icon: "🌿", label: "Rich soil", desc: "Nutrient-dense humus forms in weeks" },
    { icon: "🌻", label: "Garden growth", desc: "Feeds plants and closes the loop" },
  ],
  Electronic: [
    { icon: "🔧", label: "Dismantled", desc: "Components separated by material type" },
    { icon: "⚙️", label: "Metals recovered", desc: "Gold, copper, and rare earths extracted" },
    { icon: "🔋", label: "Battery recycled", desc: "Lithium and cobalt reused in new cells" },
    { icon: "📱", label: "Refurbished parts", desc: "Working components get a second life" },
  ],
  Textile: [
    { icon: "👕", label: "Sorted", desc: "By fiber type and condition" },
    { icon: "✂️", label: "Shredded", desc: "Fabric cut into reusable fiber" },
    { icon: "🧶", label: "Respun yarn", desc: "Fibers woven into new textiles" },
    { icon: "🛋️", label: "Insulation fill", desc: "Or upcycled into stuffing and padding" },
  ],
  Hazardous: [
    { icon: "🏭", label: "Special facility", desc: "Handled at certified hazardous sites" },
    { icon: "🧪", label: "Neutralized", desc: "Chemicals treated to safe compounds" },
    { icon: "♻️", label: "Components recovered", desc: "Metals and solvents reclaimed" },
    { icon: "✅", label: "Safe disposal", desc: "No groundwater or soil contamination" },
  ],
};

const MATERIAL_KEYWORDS = {
  Plastic: ["plastic", "bottle", "bag", "container", "straw", "lid", "cup", "pet", "poly", "styrofoam", "foam"],
  Metal: ["aluminum", "aluminium", "can", "steel", "tin", "foil", "metal", "wire", "aerosol"],
  Paper: ["paper", "cardboard", "newspaper", "magazine", "carton", "box", "pulp"],
  Glass: ["glass", "jar", "wine", "bulb"],
  Organic: ["banana", "apple", "food", "compost", "organic", "peel", "scrap", "leaf", "grass", "tea", "coffee", "egg"],
  Electronic: ["phone", "laptop", "battery", "electronic", "charger", "cable", "headphone", "e-waste", "bulb", "led"],
  Textile: ["shirt", "clothing", "jeans", "shoe", "towel", "fabric", "textile", "bedding", "cotton", "denim"],
  Hazardous: ["paint", "oil", "medicine", "chemical", "hazardous", "fluorescent", "mercury", "bleach"],
};

let collectionFilterCategory = "all";
let collectionFilterRarity = "all";

const collectionRarityFilter = document.getElementById("collection-rarity-filter");
const collectionRarityBreakdown = document.getElementById("collection-rarity-breakdown");

const SEED_RECEIVED_REQUESTS = [
  { handle: "@mayagreen", name: "Maya Green", color: "#6b8e6b", initial: "M", sentAt: Date.now() - 86400000 },
  { handle: "@sampark", name: "Sam Park", color: "#4a7c59", initial: "S", sentAt: Date.now() - 172800000 },
];

let stream = null;
let lastPhotoDataUrl = null;
let lastBinPhotoDataUrl = null;
let lastScanLifecycleContext = null;
let pendingScanContext = null;
let binVerificationMode = false;
let lifecycleAnimTimers = [];
let backgroundRemovalModule = null;
let lifecycleIsolationToken = 0;
let currentPage = "home";
let wandererActiveSince = Date.now();
let wandererTimerTarget = WANDERER_ACTIVE_MIN_MS + Math.random() * (WANDERER_ACTIVE_MAX_MS - WANDERER_ACTIVE_MIN_MS);
let pendingPrize = null;

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getPoints() {
  return Number(localStorage.getItem(STORAGE_POINTS)) || 0;
}

function setPoints(value) {
  localStorage.setItem(STORAGE_POINTS, String(value));
}

function getImpact() {
  return loadJson(STORAGE_IMPACT, {
    totalScans: 0,
    wasteGrams: 0,
    co2Kg: 0,
  });
}

function saveImpact(impact) {
  saveJson(STORAGE_IMPACT, impact);
}

function getEarnedBadges() {
  return loadJson(STORAGE_BADGES, []);
}

function saveEarnedBadges(badges) {
  saveJson(STORAGE_BADGES, badges);
}

function getScanHistory() {
  return loadJson(STORAGE_SCAN_HISTORY, []);
}

function saveScanHistory(history) {
  saveJson(STORAGE_SCAN_HISTORY, history);
}

function getProfile() {
  const profile = loadJson(STORAGE_PROFILE, null);
  if (!profile || !profile.username) return null;
  return profile;
}

function saveProfile(profile) {
  saveJson(STORAGE_PROFILE, profile);
}

function getStreakData() {
  return loadJson(STORAGE_STREAK, { count: 0, lastDate: null });
}

function saveStreakData(data) {
  saveJson(STORAGE_STREAK, data);
}

function getDailyData() {
  const today = getTodayKey();
  const data = loadJson(STORAGE_DAILY, { date: today, scans: 0 });
  if (data.date !== today) {
    return { date: today, scans: 0 };
  }
  return data;
}

function saveDailyData(data) {
  saveJson(STORAGE_DAILY, data);
}

function getFriends() {
  return loadJson(STORAGE_FRIENDS, []);
}

function saveFriends(friends) {
  saveJson(STORAGE_FRIENDS, friends);
}

function getFriendRequests() {
  return loadJson(STORAGE_FRIEND_REQUESTS, { sent: [], received: [] });
}

function saveFriendRequests(requests) {
  saveJson(STORAGE_FRIEND_REQUESTS, requests);
}

function getCollection() {
  return loadJson(STORAGE_COLLECTION, {});
}

function saveCollection(collection) {
  saveJson(STORAGE_COLLECTION, collection);
}

function getUnlockedCustomizations() {
  return loadJson(STORAGE_CUSTOMIZATIONS, []);
}

function unlockCustomization(prizeId) {
  const unlocked = getUnlockedCustomizations();
  if (!unlocked.includes(prizeId)) {
    unlocked.push(prizeId);
    saveJson(STORAGE_CUSTOMIZATIONS, unlocked);
  }
}

function getEquipped() {
  return loadJson(STORAGE_EQUIPPED, {
    frame: null,
    accessory: null,
    accent: null,
    background: null,
  });
}

function saveEquipped(equipped) {
  saveJson(STORAGE_EQUIPPED, equipped);
}

function getPrizeById(id) {
  return CUSTOMIZATION_PRIZES.find((p) => p.id === id);
}

function getNextPrize() {
  const unlocked = getUnlockedCustomizations();
  const available = CUSTOMIZATION_PRIZES.filter((p) => !unlocked.includes(p.id));
  if (available.length === 0) return null;

  let index = Number(localStorage.getItem(STORAGE_PRIZE_INDEX)) || 0;
  const prize = available[index % available.length];
  localStorage.setItem(STORAGE_PRIZE_INDEX, String((index + 1) % available.length));
  return prize;
}

function getWandererSession() {
  try {
    const raw = sessionStorage.getItem(STORAGE_WANDERER_SESSION);
    return raw ? JSON.parse(raw) : {
      eventsCount: 0,
      sessionScans: 0,
      triggeredAfterScans: false,
    };
  } catch {
    return { eventsCount: 0, sessionScans: 0, triggeredAfterScans: false };
  }
}

function saveWandererSession(data) {
  sessionStorage.setItem(STORAGE_WANDERER_SESSION, JSON.stringify(data));
}

function getWandererQuest() {
  return loadJson(STORAGE_WANDERER_QUEST, null);
}

function saveWandererQuest(quest) {
  if (quest) {
    saveJson(STORAGE_WANDERER_QUEST, quest);
  } else {
    localStorage.removeItem(STORAGE_WANDERER_QUEST);
  }
}

function getLastWandererTime() {
  return Number(localStorage.getItem(STORAGE_LAST_WANDERER)) || 0;
}

function setLastWandererTime(time = Date.now()) {
  localStorage.setItem(STORAGE_LAST_WANDERER, String(time));
}

function canSpawnWanderer() {
  if (getWandererQuest()) return false;
  const elapsed = Date.now() - getLastWandererTime();
  if (elapsed < WANDERER_COOLDOWN_MS) return false;
  const session = getWandererSession();
  if (session.eventsCount >= 1) return false;
  return true;
}

// ─── Quest Book Data ────────────────────────────────────────────────────────

function getQuestsData() {
  return loadJson(STORAGE_QUESTS, {
    currentWorld: 1,
    newQuestCompleted: false,
    progress: {
      totalDisposed: 0,
      totalRecycled: 0,
      totalComposted: 0,
      totalPlasticScanned: 0,
      totalOrganicScanned: 0,
      lifecycleViewed: 0,
      upcycleUsed: 0,
      wandererCompleted: 0,
      friendAdded: 0,
      categoriesScanned: [],
      maxStreak: 0,
      unlockedUncommon: false,
      unlockedRare: false,
      unlockedEpic: false,
    },
  });
}

function saveQuestsData(data) {
  saveJson(STORAGE_QUESTS, data);
}

function getCurrentQuestWorld() {
  return getQuestsData().currentWorld || 1;
}

function getQuestCurrentProgress(quest, qd, impact, collection, badges) {
  const p = qd.progress || {};
  const totalCatalogItems = Object.keys(collection).filter(k => !k.startsWith("bonus-")).length;

  switch (quest.id) {
    case "scan-first":      return Math.min(impact.totalScans, 1);
    case "dispose-3":       return Math.min(p.totalDisposed || 0, 3);
    case "collect-2":       return Math.min(totalCatalogItems, 2);
    case "streak-2":        return Math.min(p.maxStreak || 0, 2);

    case "plastic-10":      return Math.min(p.totalPlasticScanned || 0, 10);
    case "recycle-5":       return Math.min(p.totalRecycled || 0, 5);
    case "unlock-uncommon": return (p.unlockedUncommon) ? 1 : 0;
    case "lifecycle-3":     return Math.min(p.lifecycleViewed || 0, 3);
    case "upcycle-2":       return Math.min(p.upcycleUsed || 0, 2);

    case "organic-5":       return Math.min(p.totalOrganicScanned || 0, 5);
    case "compost-3":       return Math.min(p.totalComposted || 0, 3);
    case "collect-10":      return Math.min(totalCatalogItems, 10);
    case "wanderer-1":      return Math.min(p.wandererCompleted || 0, 1);
    case "category-3":      return Math.min((p.categoriesScanned || []).length, 3);

    case "scan-25":         return Math.min(impact.totalScans, 25);
    case "dispose-15":      return Math.min(p.totalDisposed || 0, 15);
    case "unlock-rare":     return (p.unlockedRare) ? 1 : 0;
    case "badges-3":        return Math.min(badges.length, 3);
    case "friend-1":        return Math.min(p.friendAdded || 0, 1);

    case "scan-50":         return Math.min(impact.totalScans, 50);
    case "collect-20":      return Math.min(totalCatalogItems, 20);
    case "dispose-30":      return Math.min(p.totalDisposed || 0, 30);
    case "unlock-epic":     return (p.unlockedEpic) ? 1 : 0;
    case "world4-auto": {
      const w4 = WORLD_QUESTS[3];
      const allW4Done = w4.quests.every(q => {
        const prog = getQuestCurrentProgress(q, qd, impact, collection, badges);
        return prog >= q.goal;
      });
      return allW4Done ? 1 : 0;
    }
    default: return 0;
  }
}

function getWorldQuestStats(worldNum, qd, impact, collection, badges) {
  const worldQuestSet = WORLD_QUESTS.find(w => w.worldNum === worldNum);
  if (!worldQuestSet) return { total: 0, completed: 0, pct: 100 };
  const total = worldQuestSet.quests.length;
  const completed = worldQuestSet.quests.filter(q => {
    return getQuestCurrentProgress(q, qd, impact, collection, badges) >= q.goal;
  }).length;
  return { total, completed, pct: total > 0 ? Math.round((completed / total) * 100) : 100 };
}

function checkQuestWorldAdvance() {
  const qd = getQuestsData();
  const currentWorld = qd.currentWorld || 1;
  if (currentWorld >= WORLDS.length) return;

  const impact = getImpact();
  const collection = getCollection();
  const badges = getEarnedBadges();
  const { total, completed } = getWorldQuestStats(currentWorld, qd, impact, collection, badges);

  if (completed >= total) {
    const newWorld = currentWorld + 1;
    qd.currentWorld = newWorld;
    qd.newQuestCompleted = true;
    saveQuestsData(qd);
    applyWorldTheme(newWorld);
    showTransportModal(newWorld);
    updateQuestBookBadge();
    renderLevelProgress();
  }
}

function updateQuestBookBadge() {
  const badge = document.getElementById("quest-book-badge");
  if (!badge) return;
  const qd = getQuestsData();
  badge.classList.toggle("hidden", !qd.newQuestCompleted);
}

// ─── Quest Tracking Hooks ────────────────────────────────────────────────────

function trackQuestOnScan(category, collectionResult) {
  const qd = getQuestsData();
  const p = qd.progress;

  // Track distinct categories
  const cats = p.categoriesScanned || [];
  if (category && !cats.includes(category)) {
    cats.push(category);
    p.categoriesScanned = cats;
  }

  // Track plastic scans
  const itemCategory = collectionResult?.item?.category || "";
  if (itemCategory === "Plastic" || /plastic/i.test(itemCategory) || /plastic/i.test(collectionResult?.item?.name || "")) {
    p.totalPlasticScanned = (p.totalPlasticScanned || 0) + 1;
  }

  // Track organic/compostable scans
  if (category === "compostable" || /food|organic|compost/i.test(itemCategory)) {
    p.totalOrganicScanned = (p.totalOrganicScanned || 0) + 1;
  }

  // Track new collectible rarity unlocks
  if (collectionResult?.isNew && collectionResult?.type === "catalog") {
    const rarity = collectionResult.item?.rarity || "common";
    if (rarity === "uncommon") p.unlockedUncommon = true;
    if (rarity === "rare")     p.unlockedRare = true;
    if (rarity === "epic")     p.unlockedEpic = true;
  }

  // Update maxStreak
  const streakData = getStreakData();
  if ((streakData.count || 0) > (p.maxStreak || 0)) {
    p.maxStreak = streakData.count;
  }

  saveQuestsData(qd);
  checkQuestWorldAdvance();
  renderLevelProgress();
  updateQuestBookBadge();
}

function trackQuestOnDisposal(category, binType) {
  const qd = getQuestsData();
  const p = qd.progress;
  p.totalDisposed = (p.totalDisposed || 0) + 1;
  if (binType === "recycling") p.totalRecycled = (p.totalRecycled || 0) + 1;
  if (binType === "compost")   p.totalComposted = (p.totalComposted || 0) + 1;
  saveQuestsData(qd);
  checkQuestWorldAdvance();
  renderLevelProgress();
  updateQuestBookBadge();
}

function trackQuestOnLifecycle() {
  const qd = getQuestsData();
  qd.progress.lifecycleViewed = (qd.progress.lifecycleViewed || 0) + 1;
  saveQuestsData(qd);
  checkQuestWorldAdvance();
  updateQuestBookBadge();
}

function trackQuestOnUpcycle() {
  const qd = getQuestsData();
  qd.progress.upcycleUsed = (qd.progress.upcycleUsed || 0) + 1;
  saveQuestsData(qd);
  checkQuestWorldAdvance();
  updateQuestBookBadge();
}

function trackQuestOnWandererComplete() {
  const qd = getQuestsData();
  qd.progress.wandererCompleted = (qd.progress.wandererCompleted || 0) + 1;
  saveQuestsData(qd);
  checkQuestWorldAdvance();
  renderLevelProgress();
  updateQuestBookBadge();
}

function trackQuestOnFriendAdded() {
  const qd = getQuestsData();
  qd.progress.friendAdded = (qd.progress.friendAdded || 0) + 1;
  saveQuestsData(qd);
  checkQuestWorldAdvance();
  updateQuestBookBadge();
}

function pickRandomActions(count) {
  const pool = [...ECO_ACTIONS];
  const picked = [];
  while (picked.length < count && pool.length) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]);
  }
  return picked;
}

function createWandererQuest() {
  const wanderer = WANDERERS[Math.floor(Math.random() * WANDERERS.length)];
  const actionCount = Math.random() < 0.5 ? 2 : 3;
  const actions = pickRandomActions(actionCount).map((a) => ({
    id: a.id,
    done: false,
  }));

  return {
    wandererId: wanderer.id,
    wandererEmoji: wanderer.emoji,
    wandererName: wanderer.name,
    greeting: wanderer.greeting,
    actions,
    createdAt: Date.now(),
    bubbleDismissed: false,
  };
}

function spawnWanderer() {
  if (!canSpawnWanderer()) return false;

  const quest = createWandererQuest();
  saveWandererQuest(quest);
  setLastWandererTime();

  const session = getWandererSession();
  session.eventsCount += 1;
  saveWandererSession(session);

  showWandererBubble(quest);
  showToast(`${quest.wandererEmoji} ${quest.wandererName} wandered by with a quest!`, "info");
  return true;
}

function getWandererById(id) {
  return WANDERERS.find((w) => w.id === id);
}

function hideWandererBubbleVisual() {
  if (!wandererBubble) return;
  wandererBubble.classList.remove("bubble-hidden");
  wandererBubble.classList.add("bubble-collapsed");
}

function dismissWandererBubble() {
  const quest = getWandererQuest();
  if (!quest) return;
  quest.bubbleDismissed = true;
  saveWandererQuest(quest);
  hideWandererBubbleVisual();
  if (!quest.actions.every((a) => a.done)) {
    wandererBubble.classList.add("quest-pending");
    wandererBadge.classList.remove("hidden");
  }
}

function showWandererBubble(quest) {
  if (!wandererBubble || !quest) return;

  wandererEmoji.textContent = quest.wandererEmoji;
  wandererName.textContent = quest.wandererName;
  wandererHint.textContent = "Tap for a quest!";

  const allDone = quest.actions.every((a) => a.done);
  wandererBubble.classList.remove("hidden", "bubble-hidden");
  wandererBubble.classList.toggle("bubble-collapsed", quest.bubbleDismissed && !allDone);
  wandererBubble.classList.toggle("quest-pending", quest.bubbleDismissed && !allDone);
  wandererBadge.classList.toggle("hidden", !(quest.bubbleDismissed && !allDone));
}

function openWandererModal() {
  const quest = getWandererQuest();
  if (!quest || !wandererModal) return;

  wandererModalEmoji.textContent = quest.wandererEmoji;
  wandererModalTitle.textContent = quest.wandererName;
  wandererModalGreeting.textContent = quest.greeting;

  renderWandererActions(quest);
  wandererModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function hideWandererModal() {
  if (!wandererModal) return;
  wandererModal.classList.add("hidden");
  if (!prizeModal || prizeModal.classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

function renderWandererActions(quest) {
  if (!wandererActionsList) return;
  wandererActionsList.innerHTML = "";

  const doneCount = quest.actions.filter((a) => a.done).length;
  const total = quest.actions.length;
  if (wandererProgressText) {
    wandererProgressText.textContent = `${doneCount} / ${total} complete`;
  }

  quest.actions.forEach((questAction) => {
    const actionDef = ECO_ACTIONS.find((a) => a.id === questAction.id);
    if (!actionDef) return;

    const el = document.createElement("div");
    el.className = `wanderer-action-item${questAction.done ? " done" : ""}`;
    el.innerHTML = `
      <span class="wanderer-action-icon" aria-hidden="true">${actionDef.icon}</span>
      <div class="wanderer-action-info">
        <span class="wanderer-action-name">${actionDef.name}</span>
        <span class="wanderer-action-meta">~${actionDef.minutes} min</span>
      </div>
      <span class="wanderer-action-pts">+${actionDef.points}</span>
      <button type="button" class="wanderer-action-check${questAction.done ? " done" : ""}" aria-label="Mark ${actionDef.name} done">${questAction.done ? "✓" : ""}</button>
    `;

    const checkBtn = el.querySelector(".wanderer-action-check");
    if (!questAction.done) {
      checkBtn.addEventListener("click", () => completeWandererAction(questAction.id));
    } else {
      checkBtn.disabled = true;
    }

    wandererActionsList.appendChild(el);
  });
}

function completeWandererAction(actionId) {
  const quest = getWandererQuest();
  if (!quest) return;

  const action = quest.actions.find((a) => a.id === actionId);
  if (!action || action.done) return;

  const actionDef = ECO_ACTIONS.find((a) => a.id === actionId);
  action.done = true;
  saveWandererQuest(quest);

  if (actionDef) {
    const newPoints = getPoints() + actionDef.points;
    setPoints(newPoints);
    renderStats();
    showToast(`+${actionDef.points} pts — ${actionDef.name} done!`, "points");
  }

  renderWandererActions(quest);

  if (quest.actions.every((a) => a.done)) {
    completeWandererQuest(quest);
  }
}

function completeWandererQuest(quest) {
  const totalBonus = quest.actions.reduce((sum, qa) => {
    const def = ECO_ACTIONS.find((a) => a.id === qa.id);
    return sum + (def?.points || 0);
  }, 0);

  const prize = getNextPrize();
  saveWandererQuest(null);
  hideWandererBubbleVisual();
  if (wandererBubble) wandererBubble.classList.add("hidden");

  hideWandererModal();
  trackQuestOnWandererComplete();

  if (prize) {
    unlockCustomization(prize.id);
    pendingPrize = prize;
    showPrizeModal(prize);
    showToast(`Quest complete! +${totalBonus} bonus pts earned`, "badge");
  } else {
    showToast("Quest complete! You've unlocked everything — amazing work!", "badge");
  }
}

function showPrizeModal(prize) {
  if (!prizeModal || !prize) return;

  prizeName.textContent = prize.name;
  prizePreview.innerHTML = "";

  const profile = getProfile();
  const avatarEmoji = profile?.avatar || "🌍";

  if (prize.type === "frame") {
    prizePreview.innerHTML = `<div class="profile-avatar-wrap"><div class="profile-avatar ${prize.cssClass}">${avatarEmoji}</div></div>`;
  } else if (prize.type === "accessory") {
    prizePreview.innerHTML = `<div class="profile-avatar-wrap"><div class="profile-avatar">${avatarEmoji}</div><span class="profile-accessory">${prize.emoji}</span></div>`;
  } else if (prize.type === "accent") {
    prizePreview.innerHTML = `<div class="prize-preview-accent" style="background:${prize.color}"></div>`;
  } else if (prize.type === "background") {
    prizePreview.innerHTML = `<div class="customize-preview-card ${prize.cssClass}"><div class="profile-avatar-wrap"><div class="profile-avatar">${avatarEmoji}</div></div></div>`;
  }

  prizeModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function hidePrizeModal() {
  if (!prizeModal) return;
  prizeModal.classList.add("hidden");
  pendingPrize = null;
  if (!wandererModal || wandererModal.classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

function equipPrize(prize) {
  if (!prize) return;
  const equipped = getEquipped();
  equipped[prize.type] = prize.id;
  saveEquipped(equipped);
  applyEquippedCustomizations();
  renderCustomizePickers();
  showToast(`Equipped: ${prize.name}`, "info");
}

function applyAccentColor(accentId) {
  const prize = accentId ? getPrizeById(accentId) : null;
  const root = document.documentElement;
  if (prize?.color) {
    root.style.setProperty("--custom-accent", prize.color);
    root.dataset.customAccent = accentId;
  } else {
    root.style.removeProperty("--custom-accent");
    delete root.dataset.customAccent;
  }
}

function applyAvatarCustomization(avatarEl, accessoryEl, equipped, avatarEmoji) {
  if (!avatarEl) return;

  avatarEl.textContent = avatarEmoji || "🌍";
  FRAME_CLASSES.forEach((cls) => avatarEl.classList.remove(cls));

  const framePrize = equipped.frame ? getPrizeById(equipped.frame) : null;
  if (framePrize?.cssClass) {
    avatarEl.classList.add(framePrize.cssClass);
  }

  if (accessoryEl) {
    const accPrize = equipped.accessory ? getPrizeById(equipped.accessory) : null;
    if (accPrize?.emoji) {
      accessoryEl.textContent = accPrize.emoji;
      accessoryEl.classList.remove("hidden");
    } else {
      accessoryEl.textContent = "";
      accessoryEl.classList.add("hidden");
    }
  }
}

function applyProfileCardBackground(cardEl, equipped) {
  if (!cardEl) return;
  BACKGROUND_CLASSES.forEach((cls) => cardEl.classList.remove(cls));
  const bgPrize = equipped.background ? getPrizeById(equipped.background) : null;
  if (bgPrize?.cssClass) {
    cardEl.classList.add(bgPrize.cssClass);
  }
}

function applyEquippedCustomizations() {
  const equipped = getEquipped();
  const profile = getProfile();
  const avatarEmoji = profile?.avatar || "🌍";

  applyAvatarCustomization(profileAvatar, profileAccessory, equipped, avatarEmoji);
  applyProfileCardBackground(sidebarProfileCard, equipped);
  applyAccentColor(equipped.accent);

  if (customizePreviewAvatar) {
    applyAvatarCustomization(customizePreviewAvatar, customizePreviewAccessory, equipped, avatarEmoji);
  }
  if (customizePreviewCard) {
    BACKGROUND_CLASSES.forEach((cls) => customizePreviewCard.classList.remove(cls));
    const bgPrize = equipped.background ? getPrizeById(equipped.background) : null;
    if (bgPrize?.cssClass) {
      customizePreviewCard.classList.add(bgPrize.cssClass);
    }
  }
}

function renderCustomizePickers() {
  const unlocked = getUnlockedCustomizations();
  const equipped = getEquipped();

  const renderPicker = (container, type, noneLabel = "None") => {
    if (!container) return;
    container.innerHTML = "";

    const noneBtn = document.createElement("button");
    noneBtn.type = "button";
    noneBtn.className = `customize-option none-option${!equipped[type] ? " selected" : ""}`;
    noneBtn.textContent = noneLabel;
    noneBtn.setAttribute("aria-label", `${noneLabel} — default`);
    noneBtn.addEventListener("click", () => {
      const eq = getEquipped();
      eq[type] = null;
      saveEquipped(eq);
      applyEquippedCustomizations();
      renderCustomizePickers();
    });
    container.appendChild(noneBtn);

    CUSTOMIZATION_PRIZES.filter((p) => p.type === type).forEach((prize) => {
      const isUnlocked = unlocked.includes(prize.id);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `customize-option${equipped[type] === prize.id ? " selected" : ""}${isUnlocked ? "" : " locked"}${prize.cssClass ? ` ${prize.cssClass}` : ""}`;
      btn.disabled = !isUnlocked;

      if (prize.type === "frame") {
        btn.innerHTML = `<span class="profile-avatar ${prize.cssClass}" style="width:36px;height:36px;font-size:0.9rem;">🌍</span>`;
      } else if (prize.type === "accessory") {
        btn.textContent = prize.emoji;
      } else if (prize.type === "accent") {
        btn.style.background = prize.color;
      } else if (prize.type === "background") {
        btn.setAttribute("aria-label", prize.name);
      }

      btn.setAttribute("aria-label", `${prize.name}${isUnlocked ? "" : " — locked"}`);
      if (isUnlocked) {
        btn.addEventListener("click", () => {
          const eq = getEquipped();
          eq[type] = prize.id;
          saveEquipped(eq);
          applyEquippedCustomizations();
          renderCustomizePickers();
        });
      }
      container.appendChild(btn);
    });
  };

  renderPicker(framePicker, "frame");
  renderPicker(accessoryPicker, "accessory");
  renderPicker(accentPicker, "accent");
  renderPicker(backgroundPicker, "background");
}

function checkWandererAfterScan() {
  const session = getWandererSession();
  session.sessionScans += 1;
  saveWandererSession(session);

  if (getWandererQuest()) return;

  if (session.sessionScans >= 2 && !session.triggeredAfterScans && canSpawnWanderer()) {
    session.triggeredAfterScans = true;
    saveWandererSession(session);
    spawnWanderer();
    return;
  }

  if (canSpawnWanderer() && Math.random() < WANDERER_SCAN_CHANCE) {
    spawnWanderer();
  }
}

function initWandererSystem() {
  const quest = getWandererQuest();
  if (quest) {
    showWandererBubble(quest);
  }

  wandererActiveSince = Date.now();
  wandererTimerTarget = WANDERER_ACTIVE_MIN_MS + Math.random() * (WANDERER_ACTIVE_MAX_MS - WANDERER_ACTIVE_MIN_MS);

  setInterval(() => {
    if (!canSpawnWanderer()) {
      wandererActiveSince = Date.now();
      return;
    }
    const activeMs = Date.now() - wandererActiveSince;
    if (activeMs >= wandererTimerTarget) {
      if (spawnWanderer()) {
        wandererActiveSince = Date.now();
        wandererTimerTarget = WANDERER_ACTIVE_MIN_MS + Math.random() * (WANDERER_ACTIVE_MAX_MS - WANDERER_ACTIVE_MIN_MS);
      }
    }
  }, 30000);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) wandererActiveSince = Date.now();
  });
}

function initWandererEventListeners() {
  if (wandererBubble) {
    wandererBubble.addEventListener("click", (e) => {
      if (e.target === wandererDismiss) return;
      openWandererModal();
    });
    wandererBubble.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openWandererModal();
      }
    });
  }

  if (wandererDismiss) {
    wandererDismiss.addEventListener("click", (e) => {
      e.stopPropagation();
      dismissWandererBubble();
    });
  }

  if (wandererModalClose) {
    wandererModalClose.addEventListener("click", hideWandererModal);
  }

  document.querySelector(".wanderer-modal-backdrop")?.addEventListener("click", hideWandererModal);

  if (prizeEquipBtn) {
    prizeEquipBtn.addEventListener("click", () => {
      if (pendingPrize) equipPrize(pendingPrize);
      hidePrizeModal();
    });
  }

  if (prizeLaterBtn) {
    prizeLaterBtn.addEventListener("click", hidePrizeModal);
  }
}

function normalizeMatchText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenOverlapScore(a, b) {
  const tokensA = new Set(normalizeMatchText(a).split(" ").filter(Boolean));
  const tokensB = new Set(normalizeMatchText(b).split(" ").filter(Boolean));
  if (!tokensA.size || !tokensB.size) return 0;
  let overlap = 0;
  tokensA.forEach((t) => {
    if (tokensB.has(t)) overlap += 1;
  });
  return overlap / Math.max(tokensA.size, tokensB.size);
}

function fuzzyMatchCatalog(scanName) {
  const normalized = normalizeMatchText(scanName);
  if (!normalized) return null;

  let best = null;
  let bestScore = 0;

  COLLECTION_CATALOG.forEach((item) => {
    const candidates = [item.name, ...item.keywords];
    candidates.forEach((candidate) => {
      const candNorm = normalizeMatchText(candidate);
      let score = 0;

      if (normalized === candNorm) score = 1;
      else if (normalized.includes(candNorm) || candNorm.includes(normalized)) score = 0.85;
      else score = tokenOverlapScore(normalized, candNorm);

      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    });
  });

  return bestScore >= 0.45 ? best : null;
}

function getCategoryEmoji(category) {
  return CATEGORY_EMOJI[category] || "🗑️";
}

function getRarityLabel(rarity) {
  return RARITY_LABELS[rarity] || "Common";
}

function getRarityBadgeHtml(rarity) {
  const label = getRarityLabel(rarity);
  return `<span class="rarity-badge rarity-${rarity}">${label}</span>`;
}

function getRarityCounts() {
  const collection = getCollection();
  const counts = { common: 0, uncommon: 0, rare: 0, epic: 0 };
  const totals = { common: 0, uncommon: 0, rare: 0, epic: 0 };

  COLLECTION_CATALOG.forEach((item) => {
    const rarity = item.rarity || "common";
    totals[rarity] += 1;
    if (collection[item.id]) counts[rarity] += 1;
  });

  return { counts, totals };
}

function recordCollectionEntry(data) {
  const collection = getCollection();
  const matched = fuzzyMatchCatalog(data.name);
  const ecologicalTip = (Array.isArray(data.recycleBullets) && data.recycleBullets.length)
    ? data.recycleBullets.join(" ")
    : (data.recycleUpcycle || data.ecologicalImpact || "");
  const now = Date.now();

  if (matched) {
    const existing = collection[matched.id];
    collection[matched.id] = {
      catalogId: matched.id,
      name: matched.name,
      category: matched.category,
      icon: matched.emoji,
      firstScannedAt: existing?.firstScannedAt || now,
      scanCount: (existing?.scanCount || 0) + 1,
      ecologicalTip: ecologicalTip || existing?.ecologicalTip || "",
      isBonus: false,
    };
    saveCollection(collection);
    return { type: "catalog", item: matched, isNew: !existing };
  }

  const bonusKey = `bonus-${normalizeMatchText(data.name).replace(/\s+/g, "-")}`;
  const existingBonus = collection[bonusKey];
  collection[bonusKey] = {
    catalogId: null,
    name: data.name,
    category: normalizeCategory(data.category),
    icon: getCategoryEmoji(normalizeCategory(data.category)),
    firstScannedAt: existingBonus?.firstScannedAt || now,
    scanCount: (existingBonus?.scanCount || 0) + 1,
    ecologicalTip: ecologicalTip || existingBonus?.ecologicalTip || "",
    isBonus: true,
  };
  saveCollection(collection);
  return { type: "bonus", item: collection[bonusKey], isNew: !existingBonus };
}

function getCatalogDiscoveredCount() {
  const collection = getCollection();
  return COLLECTION_CATALOG.filter((item) => collection[item.id]).length;
}

function normalizeHandle(handle) {
  const trimmed = handle.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("@") ? trimmed.toLowerCase() : `@${trimmed.toLowerCase()}`;
}

function seedFriendRequestsIfNeeded() {
  if (localStorage.getItem(STORAGE_FRIENDS_SEEDED)) return;
  const requests = getFriendRequests();
  if (requests.received.length === 0) {
    requests.received = SEED_RECEIVED_REQUESTS.map((r) => ({ ...r }));
    saveFriendRequests(requests);
  }
  localStorage.setItem(STORAGE_FRIENDS_SEEDED, "1");
}

function findDemoUser(handle) {
  return DEMO_USERS.find((u) => u.handle === handle);
}

function getUserBadge(points) {
  if (points >= 500) return "Eco Elite";
  if (points >= 300) return "Eco Guardian";
  if (points >= 150) return "Green Champ";
  if (points >= 50) return "Recycler";
  return "Sapling";
}

function buildLeaderboardEntries() {
  const profile = getProfile();
  const points = getPoints();
  const streak = getStreakCount();
  const friends = getFriends();
  const userHandle = profile?.handle
    || (profile?.username ? `@${profile.username.toLowerCase().replace(/\s+/g, "")}` : "@you");
  const userName = profile?.username || "You";
  const userInitial = userName.charAt(0).toUpperCase();

  const entries = [
    {
      handle: userHandle,
      name: userName,
      badge: getUserBadge(points),
      streak,
      points,
      color: "#2d5a3d",
      initial: userInitial,
      isUser: true,
    },
  ];

  friends.forEach((f) => {
    const demo = findDemoUser(f.handle);
    entries.push({
      handle: f.handle,
      name: f.name || demo?.name || f.handle,
      badge: demo?.badge || "Eco Friend",
      streak: demo?.streak ?? Math.floor(Math.random() * 10) + 1,
      points: demo?.points ?? Math.floor(Math.random() * 800) + 200,
      color: f.color || demo?.color || "#6b8e6b",
      initial: f.initial || demo?.initial || f.name?.charAt(0) || "?",
    });
  });

  DEMO_USERS.forEach((demo) => {
    if (!entries.some((e) => e.handle === demo.handle)) {
      entries.push({ ...demo });
    }
  });

  return entries.sort((a, b) => b.points - a.points).map((e, i) => ({ ...e, rank: i + 1 }));
}

function computeGlobalRank(points) {
  return Math.max(1, Math.floor(15000 / (points + 50)));
}

function computeWeeklyRank(points) {
  return Math.max(1, Math.floor(800 / (points + 20)));
}

function updateStreak() {
  const today = getTodayKey();
  const streak = getStreakData();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);

  if (streak.lastDate === today) return streak.count;

  if (streak.lastDate === yesterdayKey) {
    streak.count += 1;
  } else {
    streak.count = 1;
  }
  streak.lastDate = today;
  saveStreakData(streak);
  return streak.count;
}

function getStreakCount() {
  const today = getTodayKey();
  const streak = getStreakData();
  if (streak.lastDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toISOString().slice(0, 10);
    if (streak.lastDate !== yesterdayKey) return 0;
    return streak.count;
  }
  return streak.count;
}

function getLevelFromPoints(points) {
  let level = 1;
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (points >= LEVEL_THRESHOLDS[i]) {
      level = i + 1;
      break;
    }
  }
  return Math.min(level, WORLDS.length);
}

function getWorldForLevel(level) {
  return WORLDS[Math.min(level, WORLDS.length) - 1];
}

function getLevelProgress(points) {
  const level = getLevelFromPoints(points);
  const currentThreshold = LEVEL_THRESHOLDS[level - 1] ?? 0;
  const nextThreshold = LEVEL_THRESHOLDS[level] ?? null;

  if (!nextThreshold) {
    return { level, percent: 100, nextPoints: null, currentThreshold, ptsAway: 0 };
  }

  const range = nextThreshold - currentThreshold;
  const progress = points - currentThreshold;
  const percent = Math.min(100, Math.round((progress / range) * 100));
  const ptsAway = nextThreshold - points;
  return { level, percent, nextPoints: nextThreshold, currentThreshold, ptsAway };
}

function applyWorldTheme(level) {
  const world = getWorldForLevel(level);
  const root = document.documentElement;
  const body = document.body;

  root.style.setProperty("--world-bg-start", world.bgStart);
  root.style.setProperty("--world-bg-mid", world.bgMid);
  root.style.setProperty("--world-bg-end", world.bgEnd);
  root.style.setProperty("--world-accent", world.accent);
  root.style.setProperty("--forest", world.sidebar);
  root.style.setProperty("--forest-light", world.sidebarLight);
  root.style.setProperty("--forest-mid", world.sidebarLight);
  root.style.setProperty("--cream", world.cream);
  root.style.setProperty("--cream-dark", world.creamDark);
  root.style.setProperty("--hero-green", world.heroGreen);
  root.style.setProperty("--mint", world.mint);
  root.style.setProperty("--mint-dark", world.mintDark);
  root.style.setProperty("--green-pill", world.greenPill);
  root.style.setProperty("--scanner-bg", world.bgStart);

  body.dataset.world = String(level);
  root.dataset.world = String(level);

  const equipped = getEquipped();
  if (equipped.accent) {
    applyAccentColor(equipped.accent);
  }
}

function applyWorldBannerFallback(container, world) {
  if (!container || !world) return;
  container.classList.add("world-banner-fallback");
  container.style.setProperty("--fallback-start", world.bgStart);
  container.style.setProperty("--fallback-mid", world.bgMid);
  container.style.setProperty("--fallback-end", world.bgEnd);
}

function clearWorldBannerFallback(container) {
  if (!container) return;
  container.classList.remove("world-banner-fallback");
  container.style.removeProperty("--fallback-start");
  container.style.removeProperty("--fallback-mid");
  container.style.removeProperty("--fallback-end");
}

function setWorldBannerImage(imgEl, container, level) {
  if (!imgEl) return;
  const world = getWorldForLevel(level);
  clearWorldBannerFallback(container);

  imgEl.alt = `${world.name} — level ${level} world`;
  imgEl.src = world.image;

  imgEl.onerror = () => {
    imgEl.classList.add("hidden");
    applyWorldBannerFallback(container, world);
  };

  imgEl.onload = () => {
    imgEl.classList.remove("hidden");
    clearWorldBannerFallback(container);
  };
}

function renderWorldBanner(level) {
  setWorldBannerImage(worldHeroImg, worldHeroArt, level);
}

function normalizeCategory(raw) {
  const key = String(raw || "landfill").toLowerCase().trim();
  if (key in CATEGORY_BONUS) return key;
  if (key.includes("recycl")) return "recyclable";
  if (key.includes("compost")) return "compostable";
  if (key.includes("hazard")) return "hazardous";
  if (key.includes("electronic") || key.includes("e-waste")) return "electronic";
  if (key.includes("reus")) return "reusable";
  return "landfill";
}

function calculatePoints(category) {
  const normalized = normalizeCategory(category);
  return BASE_POINTS + (CATEGORY_BONUS[normalized] || CATEGORY_BONUS.landfill);
}

function getWeightGrams(data) {
  const parsed = Number(data.estimatedWeightGrams);
  if (Number.isFinite(parsed) && parsed > 0) return parsed;
  const category = normalizeCategory(data.category);
  return DEFAULT_WEIGHT_BY_CATEGORY[category] || 30;
}

function estimateCo2Kg(grams) {
  return (grams / 1000) * CO2_KG_PER_KG_WASTE;
}

function formatKg(grams) {
  return (grams / 1000).toFixed(2);
}

function formatCo2(kg) {
  return kg.toFixed(1);
}

function getFunFact(data) {
  if (data.funFact && String(data.funFact).trim()) {
    return data.funFact.trim();
  }
  return FUN_FACT_FALLBACKS[Math.floor(Math.random() * FUN_FACT_FALLBACKS.length)];
}

function treesFromPoints(points) {
  return Math.floor(points / 100);
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function formatDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function getDailyGoalPercent() {
  const daily = getDailyData();
  return Math.min(100, Math.round((daily.scans / DAILY_SCAN_GOAL) * 100));
}

function getScansToday() {
  return getDailyData().scans;
}

function renderHeaderPills() {
  // Header pills removed for cleaner UI — points shown in sidebar only
}

function renderDateStreak() {
  const streak = getStreakCount();
  const text = `${formatDate()} · 🔥 ${streak}-day streak`;
  ["home-date-streak", "leaderboard-date-streak", "myworld-date-streak"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

function getCollectionRank(discoveredCount) {
  if (discoveredCount >= 150) return "Chuck Norris 🥋";
  if (discoveredCount >= 131) return "Master Recycler";
  if (discoveredCount >= 111) return "Planet Protector";
  if (discoveredCount >= 91)  return "Sustainability Sage";
  if (discoveredCount >= 71)  return "Eco Champion";
  if (discoveredCount >= 51)  return "Green Ranger";
  if (discoveredCount >= 36)  return "Waste Warden";
  if (discoveredCount >= 21)  return "Eco Explorer";
  if (discoveredCount >= 11)  return "Recycling Scout";
  if (discoveredCount >= 6)   return "Trash Tracker";
  if (discoveredCount >= 1)   return "Novice Sorter";
  return "Newbie";
}

function renderProfile() {
  const profile = getProfile();
  const points = getPoints();

  if (profile) {
    profileDisplay.classList.remove("hidden");
    profilePlaceholder.classList.add("hidden");
    profileName.textContent = profile.username;
    applyEquippedCustomizations();

    const sidebarPts = document.getElementById("sidebar-points");
    if (sidebarPts) sidebarPts.textContent = `⚡ ${points.toLocaleString()} pts`;

    const sidebarRank = document.getElementById("sidebar-rank");
    if (sidebarRank) {
      const discovered = getCatalogDiscoveredCount();
      const rank = getCollectionRank(discovered);
      sidebarRank.textContent = rank;
      sidebarRank.classList.remove("hidden");
    }
  } else {
    profileDisplay.classList.add("hidden");
    profilePlaceholder.classList.remove("hidden");
  }
}

function renderDailyGoal() {
  // Daily goal moved to Home hero card only
}

function renderHeroCard() {
  const profile = getProfile();
  const scansToday = getScansToday();
  const pct = getDailyGoalPercent();
  const name = profile?.username || "Eco Ranger";

  const heroGreeting = document.getElementById("hero-greeting");
  const heroActions = document.getElementById("hero-actions-today");
  const heroPct = document.getElementById("hero-progress-pct");
  const heroFill = document.getElementById("hero-progress-fill");

  if (heroGreeting) heroGreeting.textContent = `${getGreeting()}, ${name}!`;
  if (heroActions) heroActions.textContent = `🌱 ${scansToday}/${DAILY_SCAN_GOAL} scans today`;
  if (heroPct) heroPct.textContent = `${pct}%`;
  if (heroFill) heroFill.style.width = `${pct}%`;
}

function renderMiniImpact() {
  const points = getPoints();
  const impact = getImpact();
  const streak = getStreakCount();

  const miniTrees = document.getElementById("mini-trees");
  const miniStreak = document.getElementById("mini-streak");
  const miniCo2 = document.getElementById("mini-co2");

  if (miniTrees) miniTrees.textContent = treesFromPoints(points);
  if (miniStreak) miniStreak.textContent = streak;
  if (miniCo2) miniCo2.textContent = formatCo2(impact.co2Kg);
}

function renderLevelProgress() {
  const qd = getQuestsData();
  const currentWorld = qd.currentWorld || 1;
  const world = getWorldForLevel(currentWorld);

  const impact = getImpact();
  const collection = getCollection();
  const badges = getEarnedBadges();
  const { total, completed, pct } = getWorldQuestStats(currentWorld, qd, impact, collection, badges);

  if (levelLabel) levelLabel.textContent = `World ${currentWorld} — ${world.emoji} ${world.name}`;
  if (levelNext) {
    levelNext.textContent = currentWorld < WORLDS.length
      ? `${completed} / ${total} quests done`
      : "ALL WORLDS RESTORED 🎉";
  }
  if (levelProgressFill) levelProgressFill.style.width = `${pct}%`;

  const worldHero = document.getElementById("world-hero");
  const worldName = document.getElementById("world-hero-name");
  const worldFill = document.getElementById("world-progress-fill");
  const worldPtsAway = document.getElementById("world-pts-away");

  if (worldHero) {
    worldHero.style.setProperty("--fallback-start", world.bgStart);
    worldHero.style.setProperty("--fallback-mid", world.bgMid);
    worldHero.style.setProperty("--fallback-end", world.bgEnd);
  }
  renderWorldBanner(currentWorld);
  if (worldName) worldName.textContent = world.name;
  if (worldFill) worldFill.style.width = `${pct}%`;
  if (worldPtsAway) {
    const remaining = total - completed;
    worldPtsAway.textContent = currentWorld < WORLDS.length
      ? (remaining === 0 ? "Opening next world…" : `${remaining} quest${remaining !== 1 ? "s" : ""} to next world`)
      : "Fully restored!";
  }
}

function renderStats() {
  const impact = getImpact();
  const points = getPoints();
  pointsValue.textContent = points.toLocaleString();
  if (statScans) statScans.textContent = impact.totalScans.toLocaleString();
  if (statWaste) statWaste.textContent = formatKg(impact.wasteGrams);
  if (statCo2) statCo2.textContent = formatCo2(impact.co2Kg);

  const questWorld = getCurrentQuestWorld();
  applyWorldTheme(questWorld);
  renderProfile();
  renderLevelProgress();
  renderHeaderPills();
  renderDateStreak();
  renderDailyGoal();
  renderHeroCard();
  renderMiniImpact();
  renderImpactEquivalents();
}

function renderImpactEquivalents() {
  const impact = getImpact();
  const points = getPoints();
  const trees = treesFromPoints(points);
  const co2Kg = impact.co2Kg;

  const treesYear = document.getElementById("impact-trees-year");
  const driving = document.getElementById("impact-driving");
  const power = document.getElementById("impact-power");
  const turtles = document.getElementById("impact-turtles");

  if (treesYear) treesYear.textContent = `${Math.max(1, Math.floor(trees * 0.9))} trees planted this year`;
  if (driving) driving.textContent = `Driving ${Math.round(co2Kg * 4)} km less`;
  if (power) power.textContent = `Powering a home for ${Math.max(1, Math.floor(co2Kg / 6))} days`;
  if (turtles) turtles.textContent = `${Math.max(1, Math.floor(points / 400))} sea turtles protected`;
}

function renderBadgesList() {
  const earned = getEarnedBadges();

  if (badgesList) {
    badgesList.innerHTML = "";
    BADGES.forEach((badge) => {
      const unlocked = earned.includes(badge.id);
      const el = document.createElement("div");
      el.className = `badge-list-item${unlocked ? "" : " locked"}`;
      el.innerHTML = `
        <span class="badge-list-emoji" aria-hidden="true">${badge.emoji}</span>
        <span class="badge-list-name">${badge.name}</span>
        <span class="badge-list-status">${unlocked ? "✓ Earned" : "🔒 Locked"}</span>
      `;
      badgesList.appendChild(el);
    });
  }
}

function renderCollectionPage() {
  const collection = getCollection();
  const discovered = getCatalogDiscoveredCount();
  const total = COLLECTION_CATALOG.length;
  const pct = Math.round((discovered / total) * 100);

  const progressText = document.getElementById("collection-progress-text");
  const progressPct = document.getElementById("collection-progress-pct");
  const progressFill = document.getElementById("collection-progress-fill");

  if (progressText) progressText.textContent = `${discovered} / ${total} items collected`;
  if (progressPct) progressPct.textContent = `${pct}%`;
  if (progressFill) progressFill.style.width = `${pct}%`;

  const { counts, totals } = getRarityCounts();
  if (collectionRarityBreakdown) {
    collectionRarityBreakdown.innerHTML = RARITY_ORDER.map((rarity) => {
      const label = getRarityLabel(rarity);
      return `<span class="rarity-breakdown-item rarity-${rarity}">${label}: ${counts[rarity]}/${totals[rarity]}</span>`;
    }).join("");
  }

  const categories = ["all", ...new Set(COLLECTION_CATALOG.map((i) => i.category))];

  if (collectionFilter) {
    collectionFilter.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `collection-filter-btn${collectionFilterCategory === cat ? " active" : ""}`;
      btn.textContent = cat === "all" ? "All" : cat;
      btn.dataset.category = cat;
      btn.addEventListener("click", () => {
        collectionFilterCategory = cat;
        renderCollectionPage();
      });
      collectionFilter.appendChild(btn);
    });
  }

  if (collectionRarityFilter) {
    collectionRarityFilter.innerHTML = "";
    const rarityOptions = ["all", ...RARITY_ORDER];
    rarityOptions.forEach((rarity) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `collection-filter-btn rarity-filter-btn${collectionFilterRarity === rarity ? " active" : ""}${rarity !== "all" ? ` rarity-${rarity}` : ""}`;
      btn.textContent = rarity === "all" ? "All rarities" : getRarityLabel(rarity);
      btn.dataset.rarity = rarity;
      btn.addEventListener("click", () => {
        collectionFilterRarity = rarity;
        renderCollectionPage();
      });
      collectionRarityFilter.appendChild(btn);
    });
  }

  if (collectionGrid) {
    collectionGrid.innerHTML = "";
    const items = COLLECTION_CATALOG.filter(
      (item) =>
        (collectionFilterCategory === "all" || item.category === collectionFilterCategory)
        && (collectionFilterRarity === "all" || item.rarity === collectionFilterRarity)
    );

    items.forEach((item) => {
      const entry = collection[item.id];
      const rarity = item.rarity || "common";
      const el = document.createElement("button");
      el.type = "button";
      el.className = `collection-cell rarity-${rarity}${entry ? " discovered" : " undiscovered"}`;
      el.innerHTML = entry
        ? `<span class="collection-cell-icon" aria-hidden="true">${entry.icon || item.emoji}</span><span class="collection-cell-name">${item.name}</span>${getRarityBadgeHtml(rarity)}`
        : `<span class="collection-cell-icon collection-cell-silhouette" aria-hidden="true">❓</span><span class="collection-cell-name">???</span><span class="rarity-badge rarity-${rarity} rarity-hint">${getRarityLabel(rarity)}</span>`;

      if (entry) {
        el.addEventListener("click", () => showCollectionDetail(item.id));
      } else {
        el.disabled = true;
      }
      collectionGrid.appendChild(el);
    });
  }

  const bonusEntries = Object.entries(collection).filter(([, v]) => v.isBonus);
  if (collectionBonusSection && collectionBonusList) {
    if (bonusEntries.length === 0) {
      collectionBonusSection.classList.add("hidden");
    } else {
      collectionBonusSection.classList.remove("hidden");
      collectionBonusList.innerHTML = "";
      bonusEntries.forEach(([key, entry]) => {
        const el = document.createElement("button");
        el.type = "button";
        el.className = "collection-bonus-item";
        el.innerHTML = `
          <span class="collection-bonus-icon" aria-hidden="true">${entry.icon}</span>
          <span class="collection-bonus-name">${entry.name}</span>
          <span class="collection-bonus-tag">Bonus</span>
        `;
        el.addEventListener("click", () => showCollectionDetail(key));
        collectionBonusList.appendChild(el);
      });
    }
  }
}

function showCollectionDetail(key) {
  const collection = getCollection();
  const entry = collection[key];
  if (!entry) return;

  const catalogItem = COLLECTION_CATALOG.find((item) => item.id === key);
  const rarity = catalogItem?.rarity || "common";

  document.getElementById("collection-detail-icon").textContent = entry.icon;
  document.getElementById("collection-detail-title").textContent = entry.name;
  const rarityEl = document.getElementById("collection-detail-rarity");
  if (rarityEl) {
    rarityEl.innerHTML = getRarityBadgeHtml(rarity);
  }
  document.getElementById("collection-detail-category").textContent = entry.category;
  document.getElementById("collection-detail-date").textContent =
    `First found: ${new Date(entry.firstScannedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
  document.getElementById("collection-detail-tip").textContent = entry.ecologicalTip || "Keep scanning to learn more eco tips!";
  document.getElementById("collection-detail-scans").textContent =
    `Scanned ${entry.scanCount} time${entry.scanCount === 1 ? "" : "s"}`;

  collectionDetailModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function hideCollectionDetail() {
  collectionDetailModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function renderLeaderboardRows(container, entries) {
  if (!container) return;
  container.innerHTML = "";
  entries.forEach((entry) => {
    const row = document.createElement("div");
    row.className = `leaderboard-row${entry.isUser ? " highlight" : ""}`;
    row.innerHTML = `
      <span class="leaderboard-rank">#${entry.rank}</span>
      <span class="leaderboard-avatar" style="background:${entry.color}">${entry.initial}</span>
      <div class="leaderboard-info">
        <span class="leaderboard-name">${entry.isUser ? `You (${entry.name})` : entry.name}</span>
        <span class="leaderboard-badge">${entry.badge}</span>
      </div>
      <span class="leaderboard-streak">🔥 ${entry.streak}</span>
      <span class="leaderboard-pts">${entry.points.toLocaleString()}</span>
    `;
    container.appendChild(row);
  });
}

function renderFriendsList() {
  const friends = getFriends();

  if (friendsList) {
    friendsList.innerHTML = "";
    if (friends.length === 0) {
      friendsList.innerHTML = '<p class="empty-state">No friends yet — add someone above or accept a request!</p>';
    } else {
      friends.forEach((f) => {
        const demo = findDemoUser(f.handle);
        const el = document.createElement("div");
        el.className = "friend-row";
        el.innerHTML = `
          <span class="leaderboard-avatar" style="background:${f.color || demo?.color || "#6b8e6b"}">${f.initial || demo?.initial || "?"}</span>
          <div class="leaderboard-info">
            <span class="leaderboard-name">${f.name || demo?.name || f.handle}</span>
            <span class="leaderboard-badge">${f.handle}</span>
          </div>
          <button class="link-btn friend-remove-btn" type="button" data-handle="${f.handle}">Remove</button>
        `;
        friendsList.appendChild(el);
      });

      friendsList.querySelectorAll(".friend-remove-btn").forEach((btn) => {
        btn.addEventListener("click", () => removeFriend(btn.dataset.handle));
      });
    }
  }

  const requests = getFriendRequests();

  if (friendRequestsReceived) {
    friendRequestsReceived.innerHTML = "";
    if (requests.received.length === 0) {
      friendRequestsReceived.innerHTML = '<p class="empty-state">No pending requests</p>';
    } else {
      requests.received.forEach((req) => {
        const el = document.createElement("div");
        el.className = "friend-request-row";
        el.innerHTML = `
          <span class="leaderboard-avatar" style="background:${req.color || "#6b8e6b"}">${req.initial || "?"}</span>
          <div class="leaderboard-info">
            <span class="leaderboard-name">${req.name || req.handle}</span>
            <span class="leaderboard-badge">${req.handle}</span>
          </div>
          <div class="friend-request-actions">
            <button class="btn-accept" type="button" data-handle="${req.handle}">Accept</button>
            <button class="btn-decline" type="button" data-handle="${req.handle}">Decline</button>
          </div>
        `;
        friendRequestsReceived.appendChild(el);
      });

      friendRequestsReceived.querySelectorAll(".btn-accept").forEach((btn) => {
        btn.addEventListener("click", () => acceptFriendRequest(btn.dataset.handle));
      });
      friendRequestsReceived.querySelectorAll(".btn-decline").forEach((btn) => {
        btn.addEventListener("click", () => declineFriendRequest(btn.dataset.handle));
      });
    }
  }

  if (friendRequestsSent) {
    friendRequestsSent.innerHTML = "";
    if (requests.sent.length === 0) {
      friendRequestsSent.innerHTML = '<p class="empty-state">No sent requests</p>';
    } else {
      requests.sent.forEach((req) => {
        const el = document.createElement("div");
        el.className = "friend-request-row";
        el.innerHTML = `
          <span class="leaderboard-avatar" style="background:${req.color || "#6b8e6b"}">${req.initial || "?"}</span>
          <div class="leaderboard-info">
            <span class="leaderboard-name">${req.name || req.handle}</span>
            <span class="leaderboard-badge">Pending…</span>
          </div>
          <button class="link-btn friend-cancel-btn" type="button" data-handle="${req.handle}">Cancel</button>
        `;
        friendRequestsSent.appendChild(el);
      });

      friendRequestsSent.querySelectorAll(".friend-cancel-btn").forEach((btn) => {
        btn.addEventListener("click", () => cancelSentRequest(btn.dataset.handle));
      });
    }
  }
}

function sendFriendRequest(handle) {
  const normalized = normalizeHandle(handle);
  if (!normalized || normalized === "@you") {
    showToast("Enter a valid username", "info");
    return;
  }

  const profile = getProfile();
  const myHandle = profile?.handle || "@you";
  if (normalized === myHandle) {
    showToast("You can't add yourself!", "info");
    return;
  }

  const friends = getFriends();
  if (friends.some((f) => f.handle === normalized)) {
    showToast("Already friends!", "info");
    return;
  }

  const requests = getFriendRequests();
  if (requests.sent.some((r) => r.handle === normalized)) {
    showToast("Request already sent", "info");
    return;
  }

  const demo = findDemoUser(normalized);
  requests.sent.push({
    handle: normalized,
    name: demo?.name || normalized.replace("@", ""),
    color: demo?.color || "#6b8e6b",
    initial: demo?.initial || normalized.charAt(1).toUpperCase(),
    sentAt: Date.now(),
  });
  saveFriendRequests(requests);
  trackQuestOnFriendAdded();

  showToast(`Friend request sent to ${normalized}`, "info");
  renderLeaderboardPage();
}

function acceptFriendRequest(handle) {
  const requests = getFriendRequests();
  const req = requests.received.find((r) => r.handle === handle);
  if (!req) return;

  requests.received = requests.received.filter((r) => r.handle !== handle);
  saveFriendRequests(requests);

  const friends = getFriends();
  if (!friends.some((f) => f.handle === handle)) {
    friends.push({
      handle: req.handle,
      name: req.name,
      color: req.color,
      initial: req.initial,
      addedAt: Date.now(),
    });
    saveFriends(friends);
  }

  showToast(`You're now friends with ${req.name || handle}!`, "info");
  renderLeaderboardPage();
}

function declineFriendRequest(handle) {
  const requests = getFriendRequests();
  requests.received = requests.received.filter((r) => r.handle !== handle);
  saveFriendRequests(requests);
  showToast("Request declined", "info");
  renderLeaderboardPage();
}

function cancelSentRequest(handle) {
  const requests = getFriendRequests();
  requests.sent = requests.sent.filter((r) => r.handle !== handle);
  saveFriendRequests(requests);
  renderLeaderboardPage();
}

function removeFriend(handle) {
  const friends = getFriends().filter((f) => f.handle !== handle);
  saveFriends(friends);
  showToast("Friend removed", "info");
  renderLeaderboardPage();
}

function addSuggestedFriend(handle) {
  sendFriendRequest(handle);
}

function renderLeaderboardPage() {
  const entries = buildLeaderboardEntries();
  renderLeaderboardRows(mainLeaderboard, entries);
  renderFriendsList();

  if (friendSuggestions) {
    friendSuggestions.innerHTML = "";
    DEMO_SUGGESTIONS.forEach((s) => {
      const el = document.createElement("div");
      el.className = "friend-suggestion";
      el.innerHTML = `
        <span class="leaderboard-avatar" style="background:${s.color}">${s.initial}</span>
        <div class="leaderboard-info">
          <span class="leaderboard-name">${s.name}</span>
          <span class="leaderboard-badge">${s.handle}</span>
        </div>
        <button class="link-btn friend-suggest-add" type="button" data-handle="${s.handle}">Add</button>
      `;
      friendSuggestions.appendChild(el);
    });

    friendSuggestions.querySelectorAll(".friend-suggest-add").forEach((btn) => {
      btn.addEventListener("click", () => addSuggestedFriend(btn.dataset.handle));
    });
  }

  if (currentLbTab === "communities") renderCommunitiesPanel();
  if (currentLbTab === "challenges") renderChallengesPanel();
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("visible"));

  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function checkBadges(context) {
  const earned = getEarnedBadges();
  const newlyEarned = [];

  const rules = [
    { id: "first_scan", test: () => context.totalScans >= 1 },
    { id: "scans_5", test: () => context.totalScans >= 5 },
    { id: "scans_10", test: () => context.totalScans >= 10 },
    { id: "scans_25", test: () => context.totalScans >= 25 },
    { id: "points_100", test: () => context.points >= 100 },
    { id: "points_500", test: () => context.points >= 500 },
    { id: "first_recyclable", test: () => context.category === "recyclable" },
    { id: "first_compostable", test: () => context.category === "compostable" },
    { id: "waste_1kg", test: () => context.wasteGrams >= 1000 },
    { id: "waste_5kg", test: () => context.wasteGrams >= 5000 },
  ];

  rules.forEach(({ id, test }) => {
    if (!earned.includes(id) && test()) {
      earned.push(id);
      newlyEarned.push(id);
    }
  });

  if (newlyEarned.length) {
    saveEarnedBadges(earned);
    newlyEarned.forEach((id) => {
      const badge = BADGES.find((b) => b.id === id);
      if (badge) {
        showToast(`Badge unlocked: ${badge.emoji} ${badge.name}`, "badge");
      }
    });
    renderBadgesList();
  }
}

function spawnTransportParticles(level) {
  if (!transportParticles) return;
  transportParticles.innerHTML = "";
  const world = getWorldForLevel(level);
  const count = 10;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "transport-particle";
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 2}s`;
    p.style.animationDuration = `${1.5 + Math.random() * 2}s`;
    p.style.background = world.accent;
    p.style.width = `${4 + Math.random() * 6}px`;
    p.style.height = p.style.width;
    transportParticles.appendChild(p);
  }
}

function showTransportModal(level) {
  const world = getWorldForLevel(level);
  transportTitle.textContent = `${world.emoji} ${world.name}`;
  transportDesc.textContent = world.desc;
  transportLevel.textContent = `Level ${level} unlocked`;

  if (transportWorldBanner) {
    setWorldBannerImage(transportWorldImg, transportWorldBanner, level);
    transportWorldBanner.classList.remove("revealed");
  }

  transportModal.classList.remove("hidden");
  document.body.classList.add("transport-active");
  spawnTransportParticles(level);

  requestAnimationFrame(() => {
    transportModal.classList.add("visible");
    if (transportWorldBanner) {
      setTimeout(() => transportWorldBanner.classList.add("revealed"), 400);
    }
    transportTitle.classList.add("slide-in");
  });
}

function hideTransportModal() {
  transportModal.classList.remove("visible");
  document.body.classList.remove("transport-active");
  if (transportWorldBanner) transportWorldBanner.classList.remove("revealed");
  if (transportTitle) transportTitle.classList.remove("slide-in");
  setTimeout(() => {
    transportModal.classList.add("hidden");
    if (transportParticles) transportParticles.innerHTML = "";
  }, 400);
}

function checkLevelUp(previousPoints, newPoints) {
  const prevLevel = getLevelFromPoints(previousPoints);
  const newLevel = getLevelFromPoints(newPoints);
  return newLevel > prevLevel;
}

function recordScanDiscovery(data) {
  const category = normalizeCategory(data.category);
  const weightGrams = getWeightGrams(data);
  const co2Kg = estimateCo2Kg(weightGrams);

  const previousPoints = getPoints();
  const afterDiscovery = previousPoints + DISCOVERY_POINT;
  setPoints(afterDiscovery);

  const impact = getImpact();
  impact.totalScans += 1;
  impact.wasteGrams += weightGrams;
  impact.co2Kg += co2Kg;
  saveImpact(impact);

  const daily = getDailyData();
  daily.scans += 1;
  saveDailyData(daily);

  updateStreak();

  const history = getScanHistory();
  history.push({
    name: data.name,
    category,
    pointsEarned: DISCOVERY_POINT,
    weightGrams,
    timestamp: Date.now(),
  });
  if (history.length > 100) history.shift();
  saveScanHistory(history);

  renderStats();
  checkBadges({
    totalScans: impact.totalScans,
    points: afterDiscovery,
    category,
    wasteGrams: impact.wasteGrams,
  });

  checkLevelUp(previousPoints, afterDiscovery);
  checkWandererAfterScan();

  const collectionResult = recordCollectionEntry(data);
  let rarityBonus = 0;
  let rarityKey = "common";

  if (collectionResult.type === "catalog") {
    rarityKey = collectionResult.item.rarity || "common";
  }

  if (collectionResult.isNew && collectionResult.type === "catalog") {
    rarityBonus = RARITY_BONUS[rarityKey] || 0;
    if (rarityBonus > 0) {
      const bonusPoints = getPoints() + rarityBonus;
      setPoints(bonusPoints);
      renderStats();
      checkBadges({
        totalScans: impact.totalScans,
        points: bonusPoints,
        category,
        wasteGrams: impact.wasteGrams,
      });
      checkLevelUp(afterDiscovery, bonusPoints);
    }
    showToast(
      `New discovery: ${collectionResult.item.emoji} ${collectionResult.item.name}! (+${rarityBonus} rarity bonus)`,
      "badge"
    );
  } else if (collectionResult.isNew) {
    showToast(`Bonus discovery: ${collectionResult.item.name}`, "info");
  }

  trackQuestOnScan(category, collectionResult);

  updateChallengeProgress({ pointsEarned: DISCOVERY_POINT + rarityBonus }, collectionResult);

  return {
    category,
    weightGrams,
    discoveryPoint: DISCOVERY_POINT,
    rarityBonus,
    rarityKey,
    collectionResult,
    data,
  };
}

function navigateTo(page) {
  currentPage = page;

  document.querySelectorAll(".page").forEach((p) => {
    const isActive = p.id === `page-${page}`;
    p.classList.toggle("hidden", !isActive);
    p.classList.toggle("active", isActive);
  });

  document.querySelectorAll(".nav-item").forEach((nav) => {
    const isActive = nav.dataset.page === page;
    nav.classList.toggle("active", isActive);
    nav.setAttribute("aria-current", isActive ? "page" : null);
  });

  if (page === "leaderboard") renderLeaderboardPage();
  if (page === "collection") renderCollectionPage();
  if (page === "myworld") {
    renderBadgesList();
    renderStats();
  }
  if (page === "settings") {
    renderCustomizePickers();
    applyEquippedCustomizations();
  }

  if (window.matchMedia("(max-width: 960px)").matches) {
    closeSidebar();
  }
}

function initAvatarPicker() {
  avatarPicker.innerHTML = "";
  AVATAR_GROUPS.forEach(({ label, options }) => {
    const groupLabel = document.createElement("span");
    groupLabel.className = "avatar-category-label";
    groupLabel.textContent = label;
    avatarPicker.appendChild(groupLabel);

    const row = document.createElement("div");
    row.className = "avatar-group-row";

    options.forEach((emoji) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "avatar-option";
      btn.textContent = emoji;
      btn.setAttribute("aria-label", `Avatar ${emoji}`);
      if (emoji === profileAvatarInput.value) {
        btn.classList.add("selected");
      }
      btn.addEventListener("click", () => {
        profileAvatarInput.value = emoji;
        avatarPicker.querySelectorAll(".avatar-option").forEach((el) => {
          el.classList.toggle("selected", el === btn);
        });
      });
      row.appendChild(btn);
    });

    avatarPicker.appendChild(row);
  });
}

function showProfileModal(isEdit = false) {
  initAvatarPicker();
  const profile = getProfile();
  if (profile) {
    profileUsernameInput.value = profile.username;
    profileAvatarInput.value = profile.avatar || "🌍";
    avatarPicker.querySelectorAll(".avatar-option").forEach((btn) => {
      btn.classList.toggle("selected", btn.textContent.trim() === profileAvatarInput.value);
    });
    document.getElementById("profile-modal-title").textContent = isEdit ? "Edit Profile" : "Create Your Traxie Profile";
  } else {
    profileUsernameInput.value = "";
    profileAvatarInput.value = "🌍";
  }
  profileModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  profileUsernameInput.focus();
}

function hideProfileModal() {
  profileModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function showHelpModal() {
  helpModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function hideHelpModal() {
  helpModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function openSidebar() {
  sidebar.classList.add("open");
  sidebarBackdrop.classList.remove("hidden");
  sidebarToggle.setAttribute("aria-expanded", "true");
  sidebarToggle.setAttribute("aria-label", "Close menu");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarBackdrop.classList.add("hidden");
  sidebarToggle.setAttribute("aria-expanded", "false");
  sidebarToggle.setAttribute("aria-label", "Open menu");
}

function toggleSidebar() {
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

const savedApiKey = localStorage.getItem(API_KEY_STORAGE);
if (savedApiKey) {
  apiKeyInput.value = savedApiKey;
}

seedFriendRequestsIfNeeded();
seedChallengesIfNeeded();
renderStats();
renderBadgesList();
renderLeaderboardPage();
applyEquippedCustomizations();
renderCustomizePickers();
initWandererSystem();
initWandererEventListeners();
updateQuestBookBadge();

if (!getProfile()) {
  showProfileModal();
}

function showError(message) {
  cameraError.textContent = message;
  cameraError.classList.remove("hidden");
}

function hideError() {
  cameraError.classList.add("hidden");
}

async function startCamera(options = {}) {
  const { keepItemPhoto = false } = options;
  hideError();

  if (stream && !keepItemPhoto) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    showError("Your browser does not support camera access.");
    return;
  }

  const activateStream = (mediaStream) => {
    stream = mediaStream;
    video.srcObject = stream;
    video.classList.remove("hidden");
    if (!keepItemPhoto) {
      photo.classList.add("hidden");
      lastPhotoDataUrl = null;
    }
    photoPlaceholder.classList.add("hidden");
    if (binVerificationMode) {
      captureBinBtn.disabled = false;
    } else {
      captureBtn.disabled = false;
    }
    startBtn.textContent = "Restart Camera";
  };

  if (stream && keepItemPhoto) {
    video.classList.remove("hidden");
    photo.classList.add("hidden");
    photoPlaceholder.classList.add("hidden");
    if (captureBinBtn) captureBinBtn.disabled = false;
    return;
  }

  try {
    activateStream(await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
      audio: false,
    }));
  } catch (err) {
    try {
      activateStream(await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      }));
    } catch {
      let message = "Could not access the camera.";
      if (err.name === "NotAllowedError") {
        message = "Camera permission was denied. Please allow access and try again.";
      } else if (err.name === "NotFoundError") {
        message = "No camera was found on this device.";
      }
      showError(message);
      captureBtn.disabled = true;
      if (captureBinBtn) captureBinBtn.disabled = true;
    }
  }
}

function takePhoto() {
  if (binVerificationMode) {
    captureBinPhoto();
    return;
  }

  if (!stream || !video.videoWidth) return;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
  lastPhotoDataUrl = dataUrl;
  photo.src = dataUrl;
  photo.classList.remove("hidden");
  video.classList.add("hidden");
  photoPlaceholder.classList.add("hidden");
  identifyBtn.disabled = false;
  hideIdentifyError();
  hideIdentifyResult();
}

function hideIdentifyError() {
  identifyError.classList.add("hidden");
}

function showIdentifyError(message) {
  identifyError.textContent = message;
  identifyError.classList.remove("hidden");
  identifyResult.classList.add("hidden");
}

function resolveMaterialCategory(data) {
  const matched = fuzzyMatchCatalog(data.name);
  if (matched?.category && MATERIAL_CATEGORIES.includes(matched.category)) {
    return matched.category;
  }

  const name = String(data.name || "").toLowerCase();
  for (const [material, keywords] of Object.entries(MATERIAL_KEYWORDS)) {
    if (keywords.some((kw) => name.includes(kw))) {
      return material;
    }
  }

  const disposal = normalizeCategory(data.category);
  if (disposal === "compostable") return "Organic";
  if (disposal === "electronic") return "Electronic";
  if (disposal === "hazardous") return "Hazardous";

  if (disposal === "recyclable") {
    if (/glass|jar|bottle/i.test(name)) return "Glass";
    if (/paper|cardboard|newspaper/i.test(name)) return "Paper";
    if (/metal|aluminum|can|steel|tin/i.test(name)) return "Metal";
    if (/cloth|shirt|fabric|textile/i.test(name)) return "Textile";
  }

  return "Plastic";
}

function renderLifecycleSteps(container, steps, pathType) {
  if (!container) return;
  container.classList.remove("animating");
  container.innerHTML = steps.map((step, i) => `
    <div class="lifecycle-step lifecycle-step-${pathType}" style="--step-delay: ${i * 0.35}s">
      <span class="lifecycle-step-icon" aria-hidden="true">${step.icon}</span>
      <div class="lifecycle-step-text">
        <span class="lifecycle-step-label">${step.label}</span>
        <span class="lifecycle-step-desc">${step.desc}</span>
      </div>
    </div>
  `).join("");

  requestAnimationFrame(() => {
    container.classList.add("animating");
  });
}

const LIFECYCLE_JOURNEY_META = {
  recycle:   { label: "♻️ Recycling path",         color: "#6fcf97" },
  compost:   { label: "🌱 Composting path",         color: "#86efac" },
  landfill:  { label: "🗑️ Landfill path",           color: "#f87171" },
  hazardous: { label: "⚠️ Hazardous disposal path", color: "#fbbf24" },
  reuse:     { label: "🔁 Reuse path",              color: "#a78bfa" },
};

const LIFECYCLE_REUSE_STEPS = [
  { icon: "🔁", label: "Reuse it" },
  { icon: "🧹", label: "Clean & store" },
  { icon: "💡", label: "Get creative" },
  { icon: "🌱", label: "Less waste!" },
];

function renderLifecycleJourney(material, correctDisposal) {
  const container = document.getElementById("lifecycle-journey-steps");
  const labelEl   = document.getElementById("lifecycle-journey-label");
  if (!container) return;

  const meta = LIFECYCLE_JOURNEY_META[correctDisposal] || LIFECYCLE_JOURNEY_META.recycle;

  let rawSteps;
  if (correctDisposal === "compost") {
    rawSteps = RECYCLE_OUTCOMES.Organic;
  } else if (correctDisposal === "landfill") {
    rawSteps = DECOMPOSITION_TIMELINES[material] || DECOMPOSITION_TIMELINES.Plastic;
  } else if (correctDisposal === "hazardous") {
    rawSteps = RECYCLE_OUTCOMES.Hazardous;
  } else if (correctDisposal === "reuse") {
    rawSteps = LIFECYCLE_REUSE_STEPS;
  } else {
    rawSteps = RECYCLE_OUTCOMES[material] || RECYCLE_OUTCOMES.Plastic;
  }

  if (labelEl) {
    labelEl.textContent = meta.label;
    labelEl.style.color = meta.color;
  }

  const html = rawSteps.map((step, i) => {
    const sep = i < rawSteps.length - 1
      ? `<span class="lj-sep" style="--i:${i + 0.6}" aria-hidden="true">→</span>`
      : "";
    return `
      <div class="lj-step" style="--i:${i}">
        <span class="lj-emoji" aria-hidden="true">${step.icon}</span>
        <span class="lj-label">${step.label}</span>
      </div>${sep}`;
  }).join("");

  container.innerHTML = html;
  container.classList.remove("animating");
  requestAnimationFrame(() => container.classList.add("animating"));
}

function clearLifecycleAnimations() {
  lifecycleAnimTimers.forEach(clearTimeout);
  lifecycleAnimTimers = [];
  lifecycleDecomposeSteps?.classList.remove("animating");
  lifecycleRecycleSteps?.classList.remove("animating");
  document.getElementById("lifecycle-journey-steps")?.classList.remove("animating");
}

function setLifecycleIsolateLoading(visible) {
  lifecycleIsolateLoading?.classList.toggle("hidden", !visible);
  lifecycle3dStage?.classList.toggle("is-isolating", visible);
}

function setLifecycleItemImage(imageUrl, { isFallback = false } = {}) {
  if (!lifecyclePhoto) return;
  lifecyclePhoto.src = imageUrl;
  lifecyclePhoto.classList.toggle("is-fallback", isFallback);
  lifecyclePhoto.classList.remove("hidden");
  lifecycleItemSpin?.classList.remove("hidden");
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function loadBackgroundRemoval() {
  if (backgroundRemovalModule) return backgroundRemovalModule;
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Background removal library load timed out after 20s")), 20000)
  );
  try {
    backgroundRemovalModule = await Promise.race([
      import("https://esm.sh/@imgly/background-removal@1.4.5"),
      timeout,
    ]);
  } catch (err) {
    console.error("[BgRemoval] Library load failed:", err);
    backgroundRemovalModule = null;
    throw err;
  }
  return backgroundRemovalModule;
}

async function isolateItemFromPhoto(photoUrl) {
  const { removeBackground } = await loadBackgroundRemoval();
  const res = await fetch(photoUrl);
  const imageBlob = await res.blob();
  console.log("[BgRemoval] Calling removeBackground…");
  const resultBlob = await removeBackground(imageBlob, {
    publicPath: "https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.4.5/dist/",
    model: "small",
  });
  console.log("[BgRemoval] Done, blob size:", resultBlob.size);
  return blobToDataUrl(resultBlob);
}

/**
 * Canvas-based background removal using BFS flood-fill from all four edges.
 * Samples corner pixels to estimate background color, then removes all connected
 * edge-reachable pixels within a color tolerance. Produces a transparent PNG.
 */
function createFallbackIsolatedUrl(photoUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      try {
        const MAX_DIM = 600;
        const scale = Math.min(1, MAX_DIM / Math.max(img.width, img.height));
        const w = Math.max(1, Math.round(img.width * scale));
        const h = Math.max(1, Math.round(img.height * scale));

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);

        const imageData = ctx.getImageData(0, 0, w, h);
        const d = imageData.data;

        // Sample corners to estimate background color (average of a 12x12 corner region)
        const CORNER = Math.min(12, Math.floor(Math.min(w, h) * 0.08));
        let rSum = 0, gSum = 0, bSum = 0, count = 0;
        for (let cy = 0; cy < CORNER; cy++) {
          for (let cx = 0; cx < CORNER; cx++) {
            for (const [px, py] of [[cx, cy], [w - 1 - cx, cy], [cx, h - 1 - cy], [w - 1 - cx, h - 1 - cy]]) {
              const i = (py * w + px) * 4;
              rSum += d[i]; gSum += d[i + 1]; bSum += d[i + 2];
              count++;
            }
          }
        }
        const bgR = rSum / count, bgG = gSum / count, bgB = bSum / count;

        const TOLERANCE = 52;
        const colorDist = (i) => Math.sqrt(
          (d[i] - bgR) ** 2 + (d[i + 1] - bgG) ** 2 + (d[i + 2] - bgB) ** 2
        );

        // BFS flood-fill from all four edges
        const isBackground = new Uint8Array(w * h);
        const queue = [];
        const enqueue = (x, y) => {
          const idx = y * w + x;
          if (isBackground[idx]) return;
          const pIdx = idx * 4;
          if (d[pIdx + 3] < 10 || colorDist(pIdx) < TOLERANCE) {
            isBackground[idx] = 1;
            queue.push(idx);
          }
        };
        for (let x = 0; x < w; x++) { enqueue(x, 0); enqueue(x, h - 1); }
        for (let y = 1; y < h - 1; y++) { enqueue(0, y); enqueue(w - 1, y); }

        let qi = 0;
        while (qi < queue.length) {
          const idx = queue[qi++];
          const x = idx % w, y = Math.floor(idx / w);
          if (x > 0)     enqueue(x - 1, y);
          if (x < w - 1) enqueue(x + 1, y);
          if (y > 0)     enqueue(x, y - 1);
          if (y < h - 1) enqueue(x, y + 1);
        }

        // Apply transparency with soft edge feathering (2-pixel radius)
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const idx = y * w + x;
            if (!isBackground[idx]) continue;
            const pIdx = idx * 4;
            // Check if on the boundary of foreground for feathering
            let fgNearby = 0;
            for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]) {
              const nx = x + dx, ny = y + dy;
              if (nx >= 0 && nx < w && ny >= 0 && ny < h && !isBackground[ny * w + nx]) fgNearby++;
            }
            d[pIdx + 3] = fgNearby > 0 ? Math.round(40 * fgNearby / 8) : 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      } catch (e) {
        reject(e);
      }
    };
    img.onerror = reject;
    img.src = photoUrl;
  });
}

async function renderLifecycleIsolatedItem(photoUrl) {
  if (!lifecyclePhoto || !photoUrl) return;

  const token = ++lifecycleIsolationToken;
  lifecyclePhoto.classList.add("hidden");
  lifecycleItemSpin?.classList.add("hidden");

  const cached = lastScanLifecycleContext?.isolatedImageUrl;
  if (cached) {
    setLifecycleItemImage(cached, { isFallback: lastScanLifecycleContext?.isolatedFallback === true });
    setLifecycleIsolateLoading(false);
    return;
  }

  setLifecycleIsolateLoading(true);

  try {
    const isolatedUrl = await isolateItemFromPhoto(photoUrl);
    if (token !== lifecycleIsolationToken) return;

    if (lastScanLifecycleContext) {
      lastScanLifecycleContext.isolatedImageUrl = isolatedUrl;
      lastScanLifecycleContext.isolatedFallback = false;
    }
    setLifecycleItemImage(isolatedUrl, { isFallback: false });
  } catch (err) {
    console.warn("Background removal failed, using fallback crop:", err);
    if (token !== lifecycleIsolationToken) return;

    try {
      const fallbackUrl = await createFallbackIsolatedUrl(photoUrl);
      if (token !== lifecycleIsolationToken) return;

      if (lastScanLifecycleContext) {
        lastScanLifecycleContext.isolatedImageUrl = fallbackUrl;
        lastScanLifecycleContext.isolatedFallback = true;
      }
      setLifecycleItemImage(fallbackUrl, { isFallback: true });
    } catch (fallbackErr) {
      console.warn("Fallback isolation failed:", fallbackErr);
      if (token !== lifecycleIsolationToken) return;
      setLifecycleItemImage(photoUrl, { isFallback: true });
    }
  } finally {
    if (token === lifecycleIsolationToken) {
      setLifecycleIsolateLoading(false);
    }
  }
}

function showLifecycleModal(data, photoUrl) {
  if (!lifecycleModal) return;

  const material = resolveMaterialCategory(data);
  const glow = CATEGORY_GLOW[material] || CATEGORY_GLOW.Plastic;
  const correctDisposal = getCorrectDisposal(data);

  clearLifecycleAnimations();

  if (lifecycleItemName) {
    lifecycleItemName.textContent = `${data.name} · ${material}`;
  }
  if (lifecyclePhoto) {
    lifecyclePhoto.alt = data.name || "Scanned item";
  }
  if (lifecycle3dStage) {
    lifecycle3dStage.style.setProperty("--lifecycle-glow", glow);
  }

  renderLifecycleJourney(material, correctDisposal);

  lifecycleModal.classList.remove("hidden");
  document.body.classList.add("modal-open");

  void renderLifecycleIsolatedItem(photoUrl);
  trackQuestOnLifecycle();
}

function hideLifecycleModal() {
  if (!lifecycleModal) return;
  lifecycleIsolationToken += 1;
  setLifecycleIsolateLoading(false);
  clearLifecycleAnimations();
  lifecycleModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function textToBullets(text, max = 3) {
  if (!text) return [];
  if (Array.isArray(text)) {
    return text.map((item) => String(item).trim()).filter(Boolean).slice(0, max);
  }

  const raw = String(text).trim();
  const split = raw
    .split(/\n+|(?:\s*[•·]\s*)|(?:\d+\.\s+)/)
    .map((part) => part.trim())
    .filter((part) => part.length > 8);

  if (split.length >= 2) return split.slice(0, max);

  const sentences = raw
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 8);

  if (sentences.length >= 2) return sentences.slice(0, max);
  if (sentences.length === 1) return [sentences[0]];
  return raw ? [raw] : [];
}

function mapCategoryToDisposal(category) {
  const normalized = normalizeCategory(category);
  if (normalized === "recyclable") return "recycle";
  if (normalized === "compostable") return "compost";
  if (normalized === "hazardous") return "hazardous";
  if (normalized === "reusable") return "reuse";
  if (normalized === "electronic") return "hazardous";
  return "landfill";
}

function normalizeDisposal(raw) {
  const key = String(raw || "").toLowerCase().trim();
  if (key.includes("recycl") || key === "deposit") return "recycle";
  if (key.includes("compost")) return "compost";
  if (key.includes("hazard") || key.includes("electronic") || key.includes("e-waste")) return "hazardous";
  if (key.includes("reus") || key.includes("upcycl")) return "reuse";
  if (key.includes("landfill") || key.includes("trash") || key.includes("garbage")) return "landfill";
  return mapCategoryToDisposal(key);
}

function getCorrectDisposal(data) {
  if (data.correctDisposal) return normalizeDisposal(data.correctDisposal);
  return mapCategoryToDisposal(data.category);
}

function normalizeBinType(raw) {
  const key = String(raw || "").toLowerCase().trim();
  if (key === "recycling" || key.includes("recycl")) return "recycle";
  if (key.includes("compost")) return "compost";
  if (key.includes("landfill") || key.includes("trash") || key.includes("garbage")) return "landfill";
  if (key.includes("hazard")) return "hazardous";
  if (key.includes("reus") || key.includes("donat")) return "reuse";
  if (key === "unknown") return "unknown";
  return "unknown";
}

function binsMatch(binType, correctDisposal) {
  return normalizeBinType(binType) === normalizeDisposal(correctDisposal);
}

function getWrongDisposalMessage(correctDisposal, data) {
  const tips = {
    recycle: "Actually, this should be recycled — rinse and check your local bin guidelines.",
    compost: "Actually, this belongs in the compost bin, not regular trash.",
    landfill: "Actually, this item can't be recycled curbside and should go in the trash.",
    hazardous: "Actually, this needs special hazardous waste disposal — never put it in curbside bins.",
    reuse: "Actually, this item is best reused or upcycled before throwing it away.",
  };
  const bulletTip = Array.isArray(data.recycleBullets) ? data.recycleBullets[0] : "";
  return bulletTip || tips[correctDisposal] || tips.recycle;
}

function scoreBinVerification(data, rarityKey, binResult) {
  const correctDisposal = getCorrectDisposal(data);
  const rarity = rarityKey || "common";
  const normalizedBin = normalizeBinType(binResult?.binType);

  if (normalizedBin === "unknown") {
    return {
      type: "unknown",
      points: 0,
      toast: "Couldn't identify the bin — try a clearer photo",
      feedback: null,
    };
  }

  if (binsMatch(binResult?.binType, correctDisposal)) {
    const points = DISPOSAL_POINTS_BY_RARITY[rarity] || DISPOSAL_POINTS_BY_RARITY.common;
    const action = correctDisposal === "reuse"
      ? "reusing properly"
      : correctDisposal === "compost"
        ? "composting properly"
        : correctDisposal === "landfill"
          ? "disposing properly"
          : correctDisposal === "hazardous"
            ? "disposing safely"
            : "recycling properly";
    return {
      points,
      type: "correct",
      toast: `Correct bin! Great job ${action}`,
      feedback: `Correct bin! +${points} pts for ${action}.`,
    };
  }

  const education = getWrongDisposalMessage(correctDisposal, data);
  const binLabel = binResult?.binLabel || DISPOSAL_DISPLAY_NAMES[normalizedBin] || "different";
  const correctLabel = DISPOSAL_DISPLAY_NAMES[correctDisposal] || correctDisposal;
  const itemName = data.name || "this item";

  return {
    points: WRONG_DISPOSAL_POINTS,
    type: "wrong",
    toast: `+${WRONG_DISPOSAL_POINTS} pts — keep learning!`,
    feedback: `Thanks for scanning! +${WRONG_DISPOSAL_POINTS} pts.`,
    correctionMessage: `This looks like a ${binLabel} bin, but ${itemName} should go in ${correctLabel}. Here's why: ${education}`,
  };
}

function getUpcycleBullets(data) {
  if (Array.isArray(data.upcycleBullets) && data.upcycleBullets.length >= 2) {
    return data.upcycleBullets.map((item) => String(item).trim()).filter(Boolean).slice(0, 4);
  }

  const name = String(data.name || "").toLowerCase();
  for (const entry of UPCYCLE_FALLBACK_BY_KEYWORD) {
    if (entry.match.test(name)) {
      return entry.ideas.slice(0, 4);
    }
  }

  const category = normalizeCategory(data.category);
  return (UPCYCLE_FALLBACK_BY_CATEGORY[category] || UPCYCLE_FALLBACK_BY_CATEGORY.landfill).slice(0, 4);
}

function getTutorialForTitle(title) {
  const t = String(title || "");
  for (const entry of TUTORIAL_STEPS_BY_KEYWORD) {
    if (entry.match.test(t)) {
      return { steps: entry.steps, materials: entry.materials, difficulty: entry.difficulty, timeEstimate: entry.timeEstimate };
    }
  }
  return TUTORIAL_GENERIC_STEPS;
}

function getUpcycleIdeas(data) {
  if (Array.isArray(data.upcycleIdeas) && data.upcycleIdeas.length >= 1) {
    return data.upcycleIdeas.slice(0, 4).map((idea) => ({
      title: String(idea.title || "").trim(),
      steps: Array.isArray(idea.steps) ? idea.steps.map((s) => String(s).trim()).filter(Boolean) : [],
      materials: Array.isArray(idea.materials) ? idea.materials.map((m) => String(m).trim()).filter(Boolean) : [],
      difficulty: String(idea.difficulty || "Easy").trim(),
      timeEstimate: String(idea.timeEstimate || "").trim(),
    })).filter((idea) => idea.title);
  }

  const bullets = getUpcycleBullets(data);
  return bullets.map((title) => {
    const tutorial = getTutorialForTitle(title);
    return { title, ...tutorial };
  });
}

function normalizeIdentifyData(parsed) {
  const data = { ...parsed };

  if (!Array.isArray(data.recycleBullets) || data.recycleBullets.length === 0) {
    data.recycleBullets = textToBullets(data.recycleUpcycle, 3);
  }
  if (!Array.isArray(data.impactBullets) || data.impactBullets.length === 0) {
    data.impactBullets = textToBullets(data.ecologicalImpact, 3);
  }
  if (!data.correctDisposal) {
    data.correctDisposal = mapCategoryToDisposal(data.category);
  }

  data.recycleBullets = data.recycleBullets.slice(0, 3);
  data.impactBullets = data.impactBullets.slice(0, 3);
  data.upcycleBullets = getUpcycleBullets(data);
  data.upcycleIdeas = getUpcycleIdeas(data);

  return data;
}

function renderBulletList(element, bullets) {
  if (!element) return;
  const items = (bullets || []).filter(Boolean);
  if (items.length === 0) {
    element.innerHTML = "<li>No tips available for this item.</li>";
    return;
  }
  element.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function resetVerifyDisposalUI() {
  if (verifyDisposalPrompt) verifyDisposalPrompt.classList.remove("hidden");
  if (verifyDisposalBtn) {
    verifyDisposalBtn.disabled = false;
    verifyDisposalBtn.classList.remove("hidden");
  }
  if (retryBinBtn) retryBinBtn.classList.add("hidden");
  if (disposalVerifiedBadge) disposalVerifiedBadge.classList.add("hidden");
  pendingScanContext = null;
}

function showVerifiedState() {
  if (verifyDisposalPrompt) verifyDisposalPrompt.classList.add("hidden");
  if (retryBinBtn) retryBinBtn.classList.add("hidden");
  if (disposalVerifiedBadge) disposalVerifiedBadge.classList.remove("hidden");
}

function showRetryBinState() {
  if (verifyDisposalPrompt) verifyDisposalPrompt.classList.add("hidden");
  if (retryBinBtn) retryBinBtn.classList.remove("hidden");
  if (disposalVerifiedBadge) disposalVerifiedBadge.classList.add("hidden");
}

function setBinVerifying(active) {
  if (binIdentifyStatus) binIdentifyStatus.classList.toggle("hidden", !active);
  if (captureBinBtn) captureBinBtn.disabled = active;
  if (cancelBinBtn) cancelBinBtn.disabled = active;
  scanOverlay.classList.toggle("hidden", !active);
}

function setScannerBinMode(active) {
  binVerificationMode = active;
  document.querySelector(".scanner-viewfinder")?.classList.toggle("bin-mode", active);
  if (binScanInstruction) binScanInstruction.classList.toggle("hidden", !active);
  if (captureBtn) captureBtn.classList.toggle("hidden", active);
  if (captureBinBtn) captureBinBtn.classList.toggle("hidden", !active);
  if (cancelBinBtn) cancelBinBtn.classList.toggle("hidden", !active);
  if (identifyBtn) identifyBtn.classList.toggle("hidden", active);
  if (startBtn) startBtn.classList.toggle("hidden", active);
}

async function enterBinVerificationMode() {
  if (!pendingScanContext || pendingScanContext.disposalResolved) return;

  setScannerBinMode(true);
  lastBinPhotoDataUrl = null;

  if (!stream) {
    await startCamera({ keepItemPhoto: true });
  } else {
    photo.classList.add("hidden");
    video.classList.remove("hidden");
    photoPlaceholder.classList.add("hidden");
    if (captureBinBtn) captureBinBtn.disabled = false;
  }

  document.querySelector(".scanner-viewfinder")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function exitBinVerificationMode() {
  setScannerBinMode(false);
  setBinVerifying(false);
  lastBinPhotoDataUrl = null;

  if (lastPhotoDataUrl) {
    photo.src = lastPhotoDataUrl;
    photo.classList.remove("hidden");
    video.classList.add("hidden");
    photoPlaceholder.classList.add("hidden");
    identifyBtn.disabled = false;
  } else if (!stream) {
    photo.classList.add("hidden");
    video.classList.add("hidden");
    photoPlaceholder.classList.remove("hidden");
    captureBtn.disabled = true;
    if (captureBinBtn) captureBinBtn.disabled = true;
  }
}

function captureBinPhoto() {
  if (!stream || !video.videoWidth) return;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  lastBinPhotoDataUrl = canvas.toDataURL("image/jpeg", 0.9);
  verifyBinDisposal();
}

function parseBinResponse(text) {
  try {
    const parsed = JSON.parse(text);
    if (parsed?.binType) return parsed;
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        const parsed = JSON.parse(match[0]);
        if (parsed?.binType) return parsed;
      } catch {
        // fall through
      }
    }
  }
  return null;
}

async function identifyBin(imageDataUrl) {
  const apiKey = apiKeyInput.value.trim();
  if (!apiKey) {
    throw new Error("Enter your OpenAI API key in Settings first.");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: BIN_VISION_PROMPT },
            { type: "image_url", image_url: { url: imageDataUrl } },
          ],
        },
      ],
      max_tokens: 200,
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(getApiErrorMessage(response.status, data));
  }

  const text = data?.choices?.[0]?.message?.content?.trim();
  if (!text) {
    throw new Error("No bin identification returned. Try again.");
  }

  const result = parseBinResponse(text);
  if (!result) {
    throw new Error("Could not read the bin analysis. Try again.");
  }

  return result;
}

function spawnVerifyConfetti() {
  if (!verifySuccessParticles) return;
  verifySuccessParticles.innerHTML = "";
  const colors = ["#6fcf97", "#4caf7a", "#e8a838", "#8fbc8f", "#2d5a3d"];
  for (let i = 0; i < 24; i++) {
    const p = document.createElement("span");
    p.className = "verify-confetti-particle";
    p.style.left = `${40 + Math.random() * 20}%`;
    p.style.top = `${40 + Math.random() * 20}%`;
    p.style.background = colors[i % colors.length];
    p.style.animationDelay = `${Math.random() * 0.3}s`;
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    verifySuccessParticles.appendChild(p);
  }
}

function playVerifySuccessAnimation(points) {
  if (!verifySuccessOverlay) return;

  if (verifySuccessPoints) {
    verifySuccessPoints.textContent = `+${points} pts`;
  }

  spawnVerifyConfetti();
  verifySuccessOverlay.classList.remove("hidden");

  requestAnimationFrame(() => {
    verifySuccessOverlay.classList.add("active");
  });

  setTimeout(() => {
    verifySuccessOverlay.classList.remove("active");
    setTimeout(() => verifySuccessOverlay.classList.add("hidden"), 400);
  }, 2200);
}

function showBinCorrectionModal(message) {
  if (!binCorrectionModal) return;
  if (binCorrectionMessage) binCorrectionMessage.textContent = message;
  binCorrectionModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function hideBinCorrectionModal() {
  if (!binCorrectionModal) return;
  binCorrectionModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function awardBinVerificationPoints(pendingContext, binResult) {
  if (!pendingContext) return null;
  if (pendingContext.disposalResolved) return null;

  const { data, collectionResult, rarityKey } = pendingContext;
  const score = scoreBinVerification(data, rarityKey, binResult);

  if (score.type === "unknown") {
    return score;
  }

  if (score.type === "correct") {
    pendingContext.disposalResolved = true;
    trackQuestOnDisposal(normalizeCategory(data.category), binResult.binType);
  } else if (score.type === "wrong") {
    if (pendingContext.wrongBinPointsAwarded) {
      score.points = 0;
      score.toast = "Not quite — try scanning the correct bin";
    } else {
      pendingContext.wrongBinPointsAwarded = true;
    }
  }

  if (score.points > 0) {
    const previousPoints = getPoints();
    const newPoints = previousPoints + score.points;
    setPoints(newPoints);

    renderStats();
    checkBadges({
      totalScans: getImpact().totalScans,
      points: newPoints,
      category: normalizeCategory(data.category),
      wasteGrams: getImpact().wasteGrams,
    });
    checkLevelUp(previousPoints, newPoints);
    updateChallengeProgress({ pointsEarned: score.points }, collectionResult);
  }

  return score;
}

async function verifyBinDisposal() {
  if (!pendingScanContext || !lastBinPhotoDataUrl) return;

  setBinVerifying(true);
  if (binIdentifyStatusText) binIdentifyStatusText.textContent = "Identifying bin type…";

  try {
    const binResult = await identifyBin(lastBinPhotoDataUrl);
    const score = awardBinVerificationPoints(pendingScanContext, binResult);

    if (!score) return;

    exitBinVerificationMode();

    if (score.type === "unknown") {
      showToast(score.toast, "info");
      showRetryBinState();
      if (pendingScanContext) pendingScanContext.disposalResolved = false;
      return;
    }

    if (scanPointsEarned && score.points > 0) {
      scanPointsEarned.textContent = `+${score.points} PTS (verified)`;
      scanPointsEarned.classList.remove("hidden");
    }

    if (score.type === "correct") {
      showVerifiedState();
      playVerifySuccessAnimation(score.points);
      showToast(score.toast, "points");
    } else {
      showRetryBinState();
      showBinCorrectionModal(score.correctionMessage);
      showToast(score.toast, "info");
    }
  } catch (err) {
    exitBinVerificationMode();
    showToast(err.message || "Bin verification failed. Try again.", "info");
    showRetryBinState();
    if (pendingScanContext) pendingScanContext.disposalResolved = false;
  } finally {
    setBinVerifying(false);
  }
}

function handleRetryBinVerification() {
  hideBinCorrectionModal();
  if (pendingScanContext) pendingScanContext.disposalResolved = false;
  enterBinVerificationMode();
}

function parseIdentifyResponse(text) {
  try {
    const parsed = JSON.parse(text);
    if (parsed?.name && (parsed?.recycleBullets || parsed?.recycleUpcycle || parsed?.impactBullets || parsed?.ecologicalImpact)) {
      return normalizeIdentifyData(parsed);
    }
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        const parsed = JSON.parse(match[0]);
        if (parsed?.name && (parsed?.recycleBullets || parsed?.recycleUpcycle || parsed?.impactBullets || parsed?.ecologicalImpact)) {
          return normalizeIdentifyData(parsed);
        }
      } catch {
        // fall through
      }
    }
  }
  return null;
}

function showIdentifyResult(data, scanContext) {
  identifyResultName.textContent = data.name;
  renderBulletList(identifyResultRecycle, data.recycleBullets);
  identifyResultFact.textContent = getFunFact(data);

  resetVerifyDisposalUI();
  pendingScanContext = { ...scanContext, disposalResolved: false, wrongBinPointsAwarded: false };

  if (scanPointsEarned) {
    const discoveryLabel = scanContext.discoveryPoint
      ? `+${scanContext.discoveryPoint} discovery pt`
      : "";
    const bonusLabel = scanContext.rarityBonus ? ` · +${scanContext.rarityBonus} rarity` : "";
    scanPointsEarned.textContent = `${discoveryLabel}${bonusLabel}`.trim() || "Verify disposal for points";
    scanPointsEarned.classList.remove("hidden");
  }

  const categoryLabel = scanContext.category.replace(/_/g, " ");
  scanCategory.textContent = categoryLabel.toUpperCase();
  scanCategory.classList.remove("hidden");

  if (impactDetails) impactDetails.classList.add("hidden");
  if (impactToggleBtn) {
    impactToggleBtn.textContent = "More details";
    impactToggleBtn.setAttribute("aria-expanded", "false");
  }

  renderBulletList(identifyResultImpact, data.impactBullets);

  lastScanLifecycleContext = { data, photoUrl: lastPhotoDataUrl };
  if (lifecycleBtn) lifecycleBtn.classList.remove("hidden");
  if (upcycleBtn) upcycleBtn.classList.remove("hidden");

  setTimeout(() => {
    if (lastScanLifecycleContext) {
      showLifecycleModal(lastScanLifecycleContext.data, lastScanLifecycleContext.photoUrl);
    }
  }, 1500);

  identifyResult.classList.remove("hidden");
}

function renderUpcycleIdeaList(ideas) {
  if (!upcycleModalList) return;
  if (!ideas || ideas.length === 0) {
    upcycleModalList.innerHTML = "<li>No ideas available for this item.</li>";
    return;
  }
  upcycleModalList.innerHTML = ideas.map((idea, i) => `
    <li>
      <div class="upcycle-idea-row">
        <span class="upcycle-idea-text">${escapeHtml(idea.title)}</span>
        <button class="btn-how-to" data-idea-index="${i}" type="button">How to →</button>
      </div>
    </li>
  `).join("");

  upcycleModalList.querySelectorAll(".btn-how-to").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.ideaIndex, 10);
      if (!isNaN(idx) && ideas[idx]) {
        showTutorialPanel(ideas[idx]);
      }
    });
  });
}

function showTutorialPanel(idea) {
  if (!tutorialPanel || !upcycleMainView) return;

  if (tutorialTitle) tutorialTitle.textContent = idea.title || "";

  if (tutorialMeta) {
    const diff = String(idea.difficulty || "Easy");
    const diffClass = `tutorial-badge-difficulty-${diff.toLowerCase()}`;
    const timeHtml = idea.timeEstimate
      ? `<span class="tutorial-badge tutorial-badge-time">⏱ ${escapeHtml(idea.timeEstimate)}</span>`
      : "";
    tutorialMeta.innerHTML = `<span class="tutorial-badge ${diffClass}">${escapeHtml(diff)}</span>${timeHtml}`;
  }

  if (tutorialMaterialsBlock && tutorialMaterials) {
    const mats = Array.isArray(idea.materials) ? idea.materials.filter(Boolean) : [];
    if (mats.length > 0) {
      tutorialMaterials.innerHTML = mats.map((m) => `<span class="tutorial-material-tag">${escapeHtml(m)}</span>`).join("");
      tutorialMaterialsBlock.classList.remove("hidden");
    } else {
      tutorialMaterialsBlock.classList.add("hidden");
    }
  }

  if (tutorialSteps) {
    const steps = Array.isArray(idea.steps) ? idea.steps.filter(Boolean) : [];
    tutorialSteps.innerHTML = steps.length > 0
      ? steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")
      : "<li>No steps available — search online for a guide!</li>";
  }

  upcycleMainView.classList.add("hidden");
  tutorialPanel.classList.remove("hidden");
}

function hideTutorialPanel() {
  if (!tutorialPanel || !upcycleMainView) return;
  tutorialPanel.classList.add("hidden");
  upcycleMainView.classList.remove("hidden");
}

function showUpcycleModal(data) {
  if (!upcycleModal || !data) return;

  const itemName = data.name || "this item";
  if (upcycleModalTitle) {
    upcycleModalTitle.textContent = `Upcycle ${itemName}`;
  }
  const ideas = data.upcycleIdeas && data.upcycleIdeas.length > 0
    ? data.upcycleIdeas
    : getUpcycleIdeas(data);
  renderUpcycleIdeaList(ideas);
  if (upcycleModalTip) {
    upcycleModalTip.textContent = "Scan a reuse bin to verify upcycling and earn bonus points";
  }

  hideTutorialPanel();
  upcycleModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  trackQuestOnUpcycle();
}

function hideUpcycleModal() {
  if (!upcycleModal) return;
  hideTutorialPanel();
  upcycleModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function hideIdentifyResult() {
  identifyResult.classList.add("hidden");
  resetVerifyDisposalUI();
  exitBinVerificationMode();
  if (impactDetails) impactDetails.classList.add("hidden");
  if (impactToggleBtn) {
    impactToggleBtn.textContent = "More details";
    impactToggleBtn.setAttribute("aria-expanded", "false");
  }
  if (lifecycleBtn) lifecycleBtn.classList.add("hidden");
  if (upcycleBtn) upcycleBtn.classList.add("hidden");
  if (scanPointsEarned) scanPointsEarned.classList.add("hidden");
  lastScanLifecycleContext = null;
}

function setIdentifying(active) {
  identifyBtn.disabled = active || !lastPhotoDataUrl;
  identifyStatus.classList.toggle("hidden", !active);
  scanOverlay.classList.toggle("hidden", !active);
}

function getApiErrorMessage(status, body) {
  if (status === 401) {
    return "Invalid API key. Check your key in Settings.";
  }
  if (status === 429) {
    return "Rate limit reached. Wait a moment and try again.";
  }
  if (body?.error?.message) {
    return body.error.message;
  }
  return `Request failed (${status}). Please try again.`;
}

async function identifyItem() {
  hideIdentifyError();
  hideIdentifyResult();

  const apiKey = apiKeyInput.value.trim();
  if (!apiKey) {
    showIdentifyError("Enter your OpenAI API key in Settings first.");
    navigateTo("settings");
    return;
  }

  if (!lastPhotoDataUrl) {
    if (!stream) {
      await startCamera();
    }
    if (!lastPhotoDataUrl) {
      showIdentifyError("Take a photo before scanning.");
      return;
    }
  }

  localStorage.setItem(API_KEY_STORAGE, apiKey);
  setIdentifying(true);
  identifyStatusText.textContent = "Analyzing waste item…";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: VISION_PROMPT },
              { type: "image_url", image_url: { url: lastPhotoDataUrl } },
            ],
          },
        ],
        max_tokens: 1000,
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      showIdentifyError(getApiErrorMessage(response.status, data));
      return;
    }

    const text = data?.choices?.[0]?.message?.content?.trim();
    if (!text) {
      showIdentifyError("No identification returned. Try again.");
      return;
    }

    const result = parseIdentifyResponse(text);
    if (!result) {
      showIdentifyError("Could not read the analysis. Try again.");
      return;
    }

    const scanContext = recordScanDiscovery(result);
    showIdentifyResult(result, scanContext);
    showToast(`+${scanContext.discoveryPoint} discovery pt — tap Verify disposal to earn more!`, "info");
  } catch {
    showIdentifyError("Network error. Check your connection and try again.");
  } finally {
    setIdentifying(false);
  }
}

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = profileUsernameInput.value.trim();
  if (!username) {
    profileUsernameInput.focus();
    return;
  }

  saveProfile({
    username,
    avatar: profileAvatarInput.value || "🌍",
    handle: getProfile()?.handle || `@${username.toLowerCase().replace(/\s+/g, "")}`,
    createdAt: getProfile()?.createdAt || Date.now(),
  });

  hideProfileModal();
  renderStats();
  renderLeaderboardPage();
  showToast(`Welcome, ${username}!`, "info");
});

editProfileBtn.addEventListener("click", () => showProfileModal(true));
transportDismiss.addEventListener("click", hideTransportModal);
helpBtn.addEventListener("click", showHelpModal);
helpClose.addEventListener("click", hideHelpModal);

if (impactToggleBtn && impactDetails) {
  impactToggleBtn.addEventListener("click", () => {
    const expanded = impactDetails.classList.toggle("hidden") === false;
    impactToggleBtn.textContent = expanded ? "Less details" : "More details";
    impactToggleBtn.setAttribute("aria-expanded", String(expanded));
  });
}

if (lifecycleBtn) {
  lifecycleBtn.addEventListener("click", () => {
    if (lastScanLifecycleContext) {
      showLifecycleModal(lastScanLifecycleContext.data, lastScanLifecycleContext.photoUrl);
    }
  });
}

if (upcycleBtn) {
  upcycleBtn.addEventListener("click", () => {
    if (lastScanLifecycleContext?.data) {
      showUpcycleModal(lastScanLifecycleContext.data);
    }
  });
}

if (upcycleModalClose) {
  upcycleModalClose.addEventListener("click", hideUpcycleModal);
}
document.querySelector(".upcycle-backdrop")?.addEventListener("click", () => {
  if (tutorialPanel && !tutorialPanel.classList.contains("hidden")) {
    hideTutorialPanel();
  } else {
    hideUpcycleModal();
  }
});
if (tutorialBackBtn) {
  tutorialBackBtn.addEventListener("click", hideTutorialPanel);
}

if (lifecycleClose) {
  lifecycleClose.addEventListener("click", hideLifecycleModal);
}
document.querySelector(".lifecycle-backdrop")?.addEventListener("click", hideLifecycleModal);

if (collectionDetailClose) {
  collectionDetailClose.addEventListener("click", hideCollectionDetail);
}
document.querySelector(".collection-detail-backdrop")?.addEventListener("click", hideCollectionDetail);

document.querySelectorAll(".nav-item, .sidebar-footer-link[data-page], .link-btn[data-page]").forEach((el) => {
  el.addEventListener("click", () => {
    if (el.dataset.page) navigateTo(el.dataset.page);
  });
});

document.querySelectorAll(".community-tab[data-lb-tab]").forEach((tab) => {
  tab.addEventListener("click", () => switchLbTab(tab.dataset.lbTab));
});

if (communityDetailClose) {
  communityDetailClose.addEventListener("click", hideCommunityDetail);
}
document.querySelector(".community-detail-backdrop")?.addEventListener("click", hideCommunityDetail);

if (friendAddForm) {
  friendAddForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const handle = friendHandleInput.value.trim();
    if (handle) {
      sendFriendRequest(handle);
      friendHandleInput.value = "";
    }
  });
}

sidebarToggle.addEventListener("click", toggleSidebar);
sidebarBackdrop.addEventListener("click", closeSidebar);

apiKeyInput.addEventListener("change", () => {
  const key = apiKeyInput.value.trim();
  if (key) {
    localStorage.setItem(API_KEY_STORAGE, key);
  } else {
    localStorage.removeItem(API_KEY_STORAGE);
  }
});

startBtn.addEventListener("click", () => startCamera());
captureBtn.addEventListener("click", takePhoto);
identifyBtn.addEventListener("click", identifyItem);

if (verifyDisposalBtn) {
  verifyDisposalBtn.addEventListener("click", enterBinVerificationMode);
}
if (captureBinBtn) {
  captureBinBtn.addEventListener("click", captureBinPhoto);
}
if (cancelBinBtn) {
  cancelBinBtn.addEventListener("click", exitBinVerificationMode);
}
if (retryBinBtn) {
  retryBinBtn.addEventListener("click", handleRetryBinVerification);
}
if (binCorrectionRetry) {
  binCorrectionRetry.addEventListener("click", handleRetryBinVerification);
}
if (binCorrectionClose) {
  binCorrectionClose.addEventListener("click", hideBinCorrectionModal);
}
document.querySelector(".bin-correction-backdrop")?.addEventListener("click", hideBinCorrectionModal);

// ─── Quest Book UI ────────────────────────────────────────────────────────────

const questBookModal  = document.getElementById("quest-book-modal");
const questBookBtn    = document.getElementById("quest-book-btn");
const questBookClose  = document.getElementById("quest-book-close");
const questBookBackdrop = questBookModal?.querySelector(".quest-book-backdrop");

function openQuestBook() {
  if (!questBookModal) return;
  renderQuestBook();
  // Clear the "new quest" badge when user opens the book
  const qd = getQuestsData();
  if (qd.newQuestCompleted) {
    qd.newQuestCompleted = false;
    saveQuestsData(qd);
    updateQuestBookBadge();
  }
  questBookModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeQuestBook() {
  if (!questBookModal) return;
  questBookModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function renderQuestBook() {
  const qd       = getQuestsData();
  const currentWorld = qd.currentWorld || 1;
  const impact   = getImpact();
  const collection = getCollection();
  const badges   = getEarnedBadges();
  const world    = getWorldForLevel(currentWorld);

  const leftTitle   = document.getElementById("quest-left-world-title");
  const leftContent = document.getElementById("quest-left-content");
  const rightTitle  = document.getElementById("quest-right-world-title");
  const rightContent = document.getElementById("quest-right-content");

  // LEFT PAGE — current world quests
  if (leftTitle) {
    leftTitle.innerHTML = `<span>${world.emoji}</span> World ${currentWorld}: ${world.name}`;
  }

  const worldQuestSet = WORLD_QUESTS.find(w => w.worldNum === currentWorld);
  if (leftContent && worldQuestSet) {
    leftContent.innerHTML = worldQuestSet.quests.map(quest => {
      const progress = getQuestCurrentProgress(quest, qd, impact, collection, badges);
      const completed = progress >= quest.goal;
      const pct = Math.min(100, Math.round((progress / quest.goal) * 100));
      return `
        <div class="quest-row${completed ? " quest-row-done" : ""}">
          <div class="quest-row-header">
            <span class="quest-icon" aria-hidden="true">${quest.icon}</span>
            <span class="quest-name${completed ? " quest-name-done" : ""}">${quest.name}</span>
            ${completed ? '<span class="quest-check" aria-hidden="true">✓</span>' : ""}
          </div>
          <div class="quest-progress">
            <div class="quest-progress-bar">
              <div class="quest-progress-fill${completed ? " quest-progress-complete" : ""}" style="width:${pct}%"></div>
            </div>
            <span class="quest-progress-text">${progress} / ${quest.goal}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  // RIGHT PAGE — next world preview or completion
  const nextWorldNum = currentWorld + 1;
  const nextWorld = nextWorldNum <= WORLDS.length ? getWorldForLevel(nextWorldNum) : null;
  const nextQuestSet = WORLD_QUESTS.find(w => w.worldNum === nextWorldNum);

  if (nextWorld && nextQuestSet) {
    if (rightTitle) {
      rightTitle.innerHTML = `<span>🔒</span> Next: ${nextWorld.name}`;
    }
    if (rightContent) {
      rightContent.innerHTML = `
        <p class="quest-next-desc">${nextWorld.desc}</p>
        <div class="quest-world-locked-badge">Complete all quests to unlock</div>
        <div class="quest-next-preview">
          ${nextQuestSet.quests.map(q => `
            <div class="quest-next-row">
              <span class="quest-icon" aria-hidden="true">${q.icon}</span>
              <span class="quest-next-name">${q.name}</span>
            </div>
          `).join("")}
        </div>
      `;
    }
  } else {
    if (rightTitle) {
      rightTitle.innerHTML = `<span>🏆</span> All Worlds Restored!`;
    }
    if (rightContent) {
      rightContent.innerHTML = `
        <p class="quest-complete-msg">You've restored all five worlds. The planet thanks you for your dedication.</p>
        <div class="quest-complete-stars" aria-hidden="true">⭐ ⭐ ⭐ ⭐ ⭐</div>
      `;
    }
  }
}

if (questBookBtn) {
  questBookBtn.addEventListener("click", openQuestBook);
}
if (questBookClose) {
  questBookClose.addEventListener("click", closeQuestBook);
}
if (questBookBackdrop) {
  questBookBackdrop.addEventListener("click", closeQuestBook);
}

window.addEventListener("beforeunload", () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
  }
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 961px)").matches) {
    closeSidebar();
  }
});
