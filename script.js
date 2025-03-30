// Initialize all charts when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    initReturnsChart();
    initTrendCharts();
    initDistributionsChart();
    initInteractivity();
});

// Monthly Sales Performance Chart
function initReturnsChart() {
    const ctx = document.getElementById('returnsChart').getContext('2d');
    
    const returnsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Sales',
                    data: [210000, 340000, 250000, 380000, 450000, 320000],
                    backgroundColor: '#00d084',
                    borderColor: '#00d084',
                    borderWidth: 1,
                    borderRadius: 5,
                },
                {
                    label: 'Rentals',
                    data: [120000, 140000, 90000, 110000, 130000, 100000],
                    backgroundColor: '#fdcb6e',
                    borderColor: '#fdcb6e',
                    borderWidth: 1,
                    borderRadius: 5,
                },
                {
                    label: 'Land Management',
                    data: [80000, 95000, 110000, 85000, 120000, 105000],
                    backgroundColor: '#ff6b6b',
                    borderColor: '#ff6b6b',
                    borderWidth: 1,
                    borderRadius: 5,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });
}

// Property Value Trend Charts
function initTrendCharts() {
    // Configuration for up trend charts
    const upTrendConfig = {
        type: 'line',
        data: {
            labels: Array(10).fill(''),
            datasets: [{
                data: [300000, 340000, 330000, 360000, 350000, 380000, 370000, 400000, 390000, 420000],
                borderColor: '#00d084',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                y: {
                    display: false,
                },
                x: {
                    display: false,
                }
            },
            elements: {
                line: {
                    tension: 0.4
                }
            }
        }
    };
    
    // Configuration for down trend charts
    const downTrendConfig = {
        type: 'line',
        data: {
            labels: Array(10).fill(''),
            datasets: [{
                data: [1200000, 1180000, 1190000, 1150000, 1160000, 1130000, 1140000, 1110000, 1120000, 1100000],
                borderColor: '#ff6b6b',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
                fill: false
            }]
        },
        options: upTrendConfig.options
    };
    
    // Initialize each trend chart
    new Chart(document.getElementById('trendChart1').getContext('2d'), upTrendConfig);
    new Chart(document.getElementById('trendChart2').getContext('2d'), upTrendConfig);
    new Chart(document.getElementById('trendChart3').getContext('2d'), downTrendConfig);
    new Chart(document.getElementById('trendChart4').getContext('2d'), upTrendConfig);
}

// Monthly Revenue Chart
function initDistributionsChart() {
    const ctx = document.getElementById('distributionsChart').getContext('2d');
    
    // Generate smooth curved line data
    function generateCurvedLineData() {
        const baseData = [150000, 180000, 120000, 250000, 160000, 230000, 190000];
        const extendedData = [];
        
        // Interpolate between points for a smoother curve
        for (let i = 0; i < baseData.length; i++) {
            extendedData.push(baseData[i]);
            if (i < baseData.length - 1) {
                const mid = (baseData[i] + baseData[i + 1]) / 2;
                extendedData.push(mid + (Math.random() * 20000 - 10000));
            }
        }
        
        return extendedData;
    }
    
    const distributionsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array(13).fill(''),
            datasets: [{
                data: generateCurvedLineData(),
                borderColor: '#6c5ce7',
                backgroundColor: 'rgba(108, 92, 231, 0.1)',
                fill: true,
                borderWidth: 3,
                pointRadius: 0,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 300000,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.4
                }
            }
        }
    });
    
    // Position the chart point and value
    setTimeout(() => {
        const chartPoint = document.querySelector('.chart-point');
        const chartValue = document.querySelector('.chart-value');
        
        if (chartPoint && chartValue) {
            chartPoint.style.top = '40%';
            chartPoint.style.left = '60%';
            
            chartValue.style.top = '35%';
            chartValue.style.left = '60%';
        }
    }, 100);
}

// Interactive elements
function initInteractivity() {
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Card options dropdown (simplified)
    const cardOptions = document.querySelectorAll('.card-options');
    cardOptions.forEach(option => {
        option.addEventListener('click', function() {
            alert('Options menu clicked');
        });
    });
    
    // Balance card indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            indicators.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Pagination buttons
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            pageBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // VR Tour button
    const vrButton = document.querySelector('.overlay-btn');
    if (vrButton) {
        vrButton.addEventListener('click', function() {
            alert('Virtual Tour functionality will be implemented here');
        });
    }
}

// Handle window resize event to redraw charts
window.addEventListener('resize', function() {
    // Reinitialize charts after a short delay to prevent multiple redraws
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
        initReturnsChart();
        initTrendCharts();
        initDistributionsChart();
    }, 200);
});

// Data simulation functions for future implementation
function simulatePropertyData() {
    // Mock function to simulate real-time property data
    return {
        price: Math.floor(300000 + Math.random() * 700000),
        change: (Math.random() * 20 - 10).toFixed(1),
        views: Math.floor(Math.random() * 1000)
    };
}

function updatePropertyPrices() {
    // Mock function to update property prices in real-time
    setInterval(() => {
        const propertyItems = document.querySelectorAll('.nft-item');
        propertyItems.forEach(item => {
            const priceEl = item.querySelector('.nft-item-price span:nth-child(2)');
            const trendEl = item.querySelector('.price-trend');
            
            if (priceEl && trendEl) {
                const data = simulatePropertyData();
                
                // Randomly update some items only
                if (Math.random() > 0.7) {
                    const currentPrice = parseFloat(priceEl.textContent.replace(/,/g, ''));
                    const newPrice = Math.round(currentPrice + (Math.random() * 20000 - 10000));
                    priceEl.textContent = newPrice.toLocaleString();
                    
                    const change = ((newPrice - currentPrice) / currentPrice * 100).toFixed(1);
                    trendEl.textContent = change >= 0 ? `+${change}%` : `${change}%`;
                    
                    // Update trend class
                    if (change >= 0) {
                        trendEl.classList.remove('trend-down');
                        trendEl.classList.add('trend-up');
                    } else {
                        trendEl.classList.remove('trend-up');
                        trendEl.classList.add('trend-down');
                    }
                }
            }
        });
    }, 10000); // Update every 10 seconds
}

// Uncomment to enable real-time price updates
// updatePropertyPrices();