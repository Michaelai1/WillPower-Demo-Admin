// Mock Data - High-Value Construction Equipment
const initialAssets = [
    // HIGH VALUE TOOLS (Assigned to Trucks)
    { id: 'WP-001', name: 'Topcon Pipe Laser (Green Beam)', type: 'Tool', status: 'Available', location: 'Warehouse', truck: null, timesBought: 0 },
    { id: 'WP-002', name: 'Spectra Grade Laser', type: 'Tool', status: 'In Use', location: 'The Vue Apts', truck: 'Truck 1', timesBought: 1 },
    { id: 'WP-003', name: 'Wacker Plate Compactor', type: 'Tool', status: 'Broken', location: 'Shop', truck: null, timesBought: 2 },
    { id: 'WP-004', name: 'Honda Trash Pump', type: 'Tool', status: 'Available', location: 'Warehouse', truck: null, timesBought: 0 },
    { id: 'WP-005', name: 'Husqvarna Cut-Off Saw', type: 'Tool', status: 'In Use', location: 'Riverside', truck: 'Truck 2', timesBought: 0 },
    { id: 'WP-006', name: 'Trench Box (8x8)', type: 'Tool', status: 'In Use', location: 'The Vue Apts', truck: 'Truck 1', timesBought: 0 },
    { id: 'WP-007', name: 'Honda Generator', type: 'Tool', status: 'Checked Out', location: 'Field', truck: 'Truck 3', timesBought: 0 },
    { id: 'WP-008', name: 'Little Giant Ladder', type: 'Tool', status: 'Available', location: 'Warehouse', truck: null, timesBought: 0 },
    // CONSUMABLES (Required for Consumables Tab)
    { id: 'C-001', name: 'Work Gloves (Large)', type: 'Consumable', status: 'Available', location: 'Warehouse', truck: null, stock: 45, crewUsage: { 'Crew 1': 10, 'Crew 2': 15 } },
    { id: 'C-002', name: 'Marking Paint (Neon Pink)', type: 'Consumable', status: 'Available', location: 'Warehouse', truck: null, stock: 32, crewUsage: { 'Crew 1': 8, 'Crew 2': 12 } },
    { id: 'C-003', name: 'Safety Glasses (Clear)', type: 'Consumable', status: 'Available', location: 'Warehouse', truck: null, stock: 18, crewUsage: { 'Crew 1': 5, 'Crew 2': 6 } }
];

const initialEventLog = [
    {
        id: 'E001',
        time: '2024-01-15 08:30:00',
        item: 'T002 - Drill - Milwaukee M18',
        crewMember: 'John Smith',
        action: 'Checked Out',
        condition: 'Good',
        assetId: 'T002'
    },
    {
        id: 'E002',
        time: '2024-01-15 09:15:00',
        item: 'T004 - Laser Level - DeWalt',
        crewMember: 'Mike Johnson',
        action: 'Checked Out',
        condition: 'Good',
        assetId: 'T004'
    },
    {
        id: 'E003',
        time: '2024-01-15 11:45:00',
        item: 'T004 - Laser Level - DeWalt',
        crewMember: 'Mike Johnson',
        action: 'Reported Broken',
        condition: 'Broken - Display not working',
        assetId: 'T004'
    },
    {
        id: 'E004',
        time: '2024-01-15 12:00:00',
        item: 'T004 - Laser Level - DeWalt',
        crewMember: 'Mike Johnson',
        action: 'Returned',
        condition: 'Broken',
        assetId: 'T004'
    },
    {
        id: 'E005',
        time: '2024-01-15 13:00:00',
        item: 'T002 - Drill - Milwaukee M18',
        crewMember: 'John Smith',
        action: 'Reported Broken',
        condition: 'Broken - Motor burned out',
        assetId: 'T002'
    },
    {
        id: 'E006',
        time: '2024-01-15 14:00:00',
        item: 'T002 - Drill - Milwaukee M18',
        crewMember: 'Admin',
        action: 'Replaced',
        condition: 'New purchase - Replacement',
        assetId: 'T002'
    },
    {
        id: 'E007',
        time: '2024-01-16 07:00:00',
        item: 'T002 - Drill - Milwaukee M18',
        crewMember: 'John Smith',
        action: 'Assigned to Truck',
        condition: 'Good',
        assetId: 'T002'
    },
    {
        id: 'E008',
        time: '2024-01-16 08:00:00',
        item: 'S001 - Extension Ladder 24ft',
        crewMember: 'Sarah Williams',
        action: 'Checked Out',
        condition: 'Good',
        assetId: 'S001'
    },
    {
        id: 'E009',
        time: '2024-01-16 08:15:00',
        item: 'S001 - Extension Ladder 24ft',
        crewMember: 'Sarah Williams',
        action: 'Assigned to Truck',
        condition: 'Good',
        assetId: 'S001'
    },
    {
        id: 'E010',
        time: '2024-01-16 10:30:00',
        item: 'T005 - Circular Saw - Makita',
        crewMember: 'David Brown',
        action: 'Checked Out',
        condition: 'Good',
        assetId: 'T005'
    },
    {
        id: 'E011',
        time: '2024-01-16 10:45:00',
        item: 'T005 - Circular Saw - Makita',
        crewMember: 'David Brown',
        action: 'Assigned to Truck',
        condition: 'Good',
        assetId: 'T005'
    },
    {
        id: 'E012',
        time: '2024-01-16 11:00:00',
        item: 'T008 - Hammer Drill - Milwaukee',
        crewMember: 'David Brown',
        action: 'Reported Broken',
        condition: 'Broken - Chuck malfunction',
        assetId: 'T008'
    },
    {
        id: 'E013',
        time: '2024-01-16 12:00:00',
        item: 'T008 - Hammer Drill - Milwaukee',
        crewMember: 'Admin',
        action: 'Replaced',
        condition: 'New purchase - Replacement',
        assetId: 'T008'
    },
    {
        id: 'E014',
        time: '2024-01-17 09:00:00',
        item: 'S003 - Generator 5500W',
        crewMember: 'Emily Davis',
        action: 'Checked Out',
        condition: 'Good',
        assetId: 'S003'
    },
    {
        id: 'E015',
        time: '2024-01-17 09:15:00',
        item: 'S003 - Generator 5500W',
        crewMember: 'Emily Davis',
        action: 'Assigned to Truck',
        condition: 'Good',
        assetId: 'S003'
    },
    {
        id: 'E016',
        time: '2024-01-17 14:20:00',
        item: 'S005 - Plate Compactor',
        crewMember: 'Robert Wilson',
        action: 'Checked Out',
        condition: 'Good',
        assetId: 'S005'
    },
    {
        id: 'E017',
        time: '2024-01-17 14:30:00',
        item: 'S005 - Plate Compactor',
        crewMember: 'Robert Wilson',
        action: 'Assigned to Truck',
        condition: 'Good',
        assetId: 'S005'
    },
    {
        id: 'E018',
        time: '2024-01-18 08:00:00',
        item: 'C001 - Work Gloves - Large',
        crewMember: 'Admin',
        action: 'Stock Adjusted',
        condition: 'Stock: 45',
        assetId: 'C001'
    },
];

const trucks = ['Truck 1', 'Truck 2', 'Truck 3'];

// State
let assets = [...initialAssets];
let eventLog = [...initialEventLog];

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('loginError');

// Login Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (passwordInput.value === '1234') {
        loginError.textContent = '';
        loginScreen.classList.add('hidden');
        dashboard.classList.remove('hidden');
        initDashboard();
    } else {
        loginError.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = '';
    }
});

// Tab Navigation - Use event delegation for reliability
function setupTabs() {
    // Use event delegation on the sidebar nav
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;
    
    // Remove any existing listeners by using a single delegated listener
    sidebarNav.addEventListener('click', function(e) {
        const navLink = e.target.closest('.nav-link');
        if (!navLink) return;
        
        e.preventDefault();
        const tabId = navLink.dataset.tab;
        
        if (!tabId) return;
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
        
        // Hide all views
        document.querySelectorAll('.view').forEach(v => {
            v.classList.add('hidden');
        });
        
        // Show target view
        const targetView = document.getElementById(`${tabId}View`);
        if (targetView) {
            targetView.classList.remove('hidden');
            
            // Render the view immediately
            if (tabId === 'allAssets') {
                renderAllAssets();
            } else if (tabId === 'trucks') {
                renderTruckInventory();
            } else if (tabId === 'consumables') {
                renderConsumables();
            } else if (tabId === 'history') {
                renderHistory();
            }
        }
    });
}

// Initialize Dashboard
function initDashboard() {
    // Set up search handlers first
    const allAssetsSearch = document.getElementById('allAssetsSearch');
    const historySearch = document.getElementById('historySearch');
    
    if (allAssetsSearch) {
        allAssetsSearch.addEventListener('input', renderAllAssets);
    }
    
    if (historySearch) {
        historySearch.addEventListener('input', renderHistory);
    }
    
    // Set up tabs
    setupTabs();
    
    // Initial render
    renderAllAssets();
    renderTruckInventory();
    renderConsumables();
    renderHistory();
}

// Render All Assets
function renderAllAssets() {
    // Ensure the view is visible
    const view = document.getElementById('allAssetsView');
    if (view) {
        view.classList.remove('hidden');
    }
    
    const searchInput = document.getElementById('allAssetsSearch');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const filtered = assets.filter(asset =>
        asset.id.toLowerCase().includes(searchTerm) ||
        asset.name.toLowerCase().includes(searchTerm) ||
        asset.location.toLowerCase().includes(searchTerm) ||
        asset.status.toLowerCase().includes(searchTerm)
    );
    
    const tbody = document.getElementById('allAssetsTableBody');
    const empty = document.getElementById('allAssetsEmpty');
    
    if (!tbody || !empty) {
        console.error('Table elements not found');
        return;
    }
    
    if (filtered.length === 0) {
        tbody.innerHTML = '';
        empty.classList.remove('hidden');
        return;
    }
    
    empty.classList.add('hidden');
    tbody.innerHTML = filtered.map(asset => {
        const statusClass = asset.status.toLowerCase().replace(/\s+/g, '');
        return `
        <tr>
            <td>${asset.id}</td>
            <td>${asset.name}</td>
            <td><span class="status-badge status-${statusClass}">${asset.status}</span></td>
            <td>${asset.location}</td>
        </tr>
    `;
    }).join('');
}

// Render Truck Inventory
function renderTruckInventory() {
    const container = document.getElementById('trucksContainer');
    container.innerHTML = trucks.map(truck => {
        const truckAssets = assets.filter(a => a.truck === truck);
        return `
            <div class="truck-section">
                <div class="truck-header">
                    <h3>${truck}</h3>
                </div>
                ${truckAssets.length > 0 ? `
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Location</th>
                                    <th># Times Bought</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${truckAssets.map(asset => `
                                    <tr>
                                        <td>${asset.id}</td>
                                        <td>${asset.name}</td>
                                        <td>${asset.type}</td>
                                        <td><span class="status-badge status-${asset.status.toLowerCase().replace(' ', '')}">${asset.status}</span></td>
                                        <td>${asset.location}</td>
                                        <td class="times-bought">${asset.timesBought || 0}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                ` : `
                    <div class="truck-empty">No assets assigned to this truck.</div>
                `}
            </div>
        `;
    }).join('');
}

// Render Consumables
function renderConsumables() {
    const consumables = assets.filter(a => a.type === 'Consumable');
    const grid = document.getElementById('consumablesGrid');
    grid.innerHTML = consumables.map(item => {
        const crewUsage = item.crewUsage || {};
        const crewUsageText = Object.entries(crewUsage)
            .map(([crew, amount]) => `${crew} took ${amount}`)
            .join(', ');
        
        return `
        <div class="consumable-card">
            <div class="consumable-card-header">
                <div>
                    <h3>${item.name}</h3>
                    <p class="consumable-card-id">${item.id}</p>
                </div>
            </div>
            <div class="consumable-stock">
                <div class="stock-info">
                    <p class="stock-label">Current Stock</p>
                    <p class="stock-value">${item.stock || 0}</p>
                </div>
                <div class="stock-controls">
                    <button class="stock-btn stock-btn-minus" onclick="adjustStock('${item.id}', -1)" ${!item.stock || item.stock === 0 ? 'disabled' : ''}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <button class="stock-btn stock-btn-plus" onclick="adjustStock('${item.id}', 1)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="consumable-footer">
                <p>Location: ${item.location}</p>
                ${crewUsageText ? `<p class="crew-usage">${crewUsageText}</p>` : ''}
            </div>
        </div>
    `;
    }).join('');
}

// Adjust Stock
function adjustStock(assetId, delta) {
    const asset = assets.find(a => a.id === assetId);
    if (!asset) return;
    
    const newStock = Math.max(0, (asset.stock || 0) + delta);
    asset.stock = newStock;
    
    // Add event log entry
    const now = new Date();
    const timeStr = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(',', '');
    
    eventLog.unshift({
        id: `E${Date.now()}`,
        time: timeStr,
        item: `${asset.id} - ${asset.name}`,
        crewMember: 'Admin',
        action: delta > 0 ? 'Stock Added' : 'Stock Used',
        condition: `Stock: ${newStock}`,
        assetId: asset.id
    });
    
    renderConsumables();
    renderHistory();
}

// Function to handle replacement when item breaks
function replaceBrokenItem(assetId) {
    const asset = assets.find(a => a.id === assetId);
    if (!asset || !asset.truck) return;
    
    asset.timesBought = (asset.timesBought || 0) + 1;
    asset.status = 'In Use';
    
    const now = new Date();
    const timeStr = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(',', '');
    
    eventLog.unshift({
        id: `E${Date.now()}`,
        time: timeStr,
        item: `${asset.id} - ${asset.name}`,
        crewMember: 'Admin',
        action: 'Replaced',
        condition: `New purchase - Replacement (Total: ${asset.timesBought})`,
        assetId: asset.id
    });
    
    renderTruckInventory();
    renderHistory();
}

// Render History
function renderHistory() {
    const searchInput = document.getElementById('historySearch');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const sorted = [...eventLog].sort((a, b) => new Date(b.time) - new Date(a.time));
    const filtered = sorted.filter(event =>
        event.item.toLowerCase().includes(searchTerm) ||
        event.crewMember.toLowerCase().includes(searchTerm) ||
        event.action.toLowerCase().includes(searchTerm) ||
        event.condition.toLowerCase().includes(searchTerm)
    );
    
    const tbody = document.getElementById('historyTableBody');
    const empty = document.getElementById('historyEmpty');
    
    if (!tbody || !empty) return;
    
    if (filtered.length === 0) {
        tbody.innerHTML = '';
        empty.classList.remove('hidden');
        return;
    }
    
    empty.classList.add('hidden');
    tbody.innerHTML = filtered.map(event => {
        const isBroken = event.action === 'Reported Broken';
        const previousCustodian = isBroken ? findPreviousCustodian(event.assetId, event.time) : null;
        
        let actionClass = 'action-default';
        if (isBroken) actionClass = 'action-broken';
        else if (event.action === 'Checked Out') actionClass = 'action-checkout';
        else if (event.action === 'Returned') actionClass = 'action-returned';
        else if (event.action === 'Replaced') actionClass = 'action-checkout';
        
        return `
            <tr class="${isBroken ? 'broken-row' : ''}">
                <td>${event.time}</td>
                <td>${event.item}</td>
                <td>
                    ${event.crewMember}
                    ${previousCustodian && previousCustodian !== event.crewMember ? `
                        <div class="previous-custodian">Previous: ${previousCustodian}</div>
                    ` : ''}
                </td>
                <td><span class="action-badge ${actionClass}">${event.action}</span></td>
                <td>${event.condition}</td>
            </tr>
        `;
    }).join('');
}

// Find Previous Custodian
function findPreviousCustodian(assetId, currentEventTime) {
    const previousEvents = eventLog.filter(e =>
        e.assetId === assetId &&
        new Date(e.time) < new Date(currentEventTime) &&
        (e.action === 'Checked Out' || e.action === 'Assigned to Truck')
    );
    
    if (previousEvents.length > 0) {
        const sorted = previousEvents.sort((a, b) => new Date(b.time) - new Date(a.time));
        return sorted[0].crewMember;
    }
    return null;
}

