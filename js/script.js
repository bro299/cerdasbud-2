// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 10) {
        // Saat di-scroll, navbar mendapatkan efek blur
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white/30', 'backdrop-blur-md');
    } else {
        // Saat di posisi atas, navbar transparan tanpa blur
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-white/30', 'backdrop-blur-md');
    }
});
  

    document.addEventListener('DOMContentLoaded', function() {
        // Suicide Cases Chart - Mixed Chart (Line & Bar)
        const suicideCtx = document.getElementById('suicideChart').getContext('2d');
        
        const suicideData = {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Kasus Bunuh Diri Remaja',
                    data: [53, 58, 64, 71, 80, 92],
                    backgroundColor: 'rgba(79, 70, 229, 0.6)',
                    borderColor: 'rgba(79, 70, 229, 1)',
                    borderWidth: 1
                },
                {
                    type: 'bar',
                    label: 'Kasus Terkait Perundungan',
                    data: [24, 28, 34, 42, 51, 62],
                    backgroundColor: 'rgba(129, 140, 248, 0.6)',
                    borderColor: 'rgba(129, 140, 248, 1)',
                    borderWidth: 1
                },
                {
                    type: 'line',
                    label: 'Persentase Kasus Terkait Perundungan (%)',
                    data: [45, 48, 53, 59, 64, 67],
                    borderColor: 'rgba(220, 38, 38, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        };
        
        const suicideChart = new Chart(suicideCtx, {
            type: 'bar',
            data: suicideData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Jumlah Kasus'
                        }
                    },
                    y1: {
                        beginAtZero: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Persentase (%)'
                        },
                        grid: {
                            drawOnChartArea: false
                        },
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                }
            }
        });
        
        // School Bullying Impact Chart - Doughnut & Bar Combined
        const schoolBullyingCtx = document.getElementById('schoolBullyingChart').getContext('2d');
        
        const schoolData = {
            labels: ['Penurunan Prestasi', 'Masalah Kesehatan Mental', 'Ketidakhadiran', 'Isolasi Sosial', 'Masalah Perilaku'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Jumlah Siswa Terdampak (dalam ribuan)',
                    data: [486, 572, 348, 426, 298],
                    backgroundColor: [
                        'rgba(79, 70, 229, 0.7)',
                        'rgba(129, 140, 248, 0.7)',
                        'rgba(165, 180, 252, 0.7)',
                        'rgba(199, 210, 254, 0.7)',
                        'rgba(224, 231, 255, 0.7)'
                    ],
                    borderColor: 'rgba(79, 70, 229, 0.8)',
                    borderWidth: 1
                },
                {
                    type: 'line',
                    label: 'Persentase Siswa Terdampak (%)',
                    data: [42, 49, 30, 37, 26],
                    borderColor: 'rgba(220, 38, 38, 1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(220, 38, 38, 1)',
                    pointRadius: 5,
                    yAxisID: 'y1'
                }
            ]
        };
        
        const schoolBullyingChart = new Chart(schoolBullyingCtx, {
            type: 'bar',
            data: schoolData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Jumlah Siswa (dalam ribuan)'
                        }
                    },
                    y1: {
                        beginAtZero: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Persentase (%)'
                        },
                        grid: {
                            drawOnChartArea: false
                        },
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                }
            }
        });
    });

    let userName = '';
    let userAge = '';
    let userGender = '';

    // Loading animation
    window.addEventListener('load', () => {
        const loadingScreen = document.getElementById('loading-screen');
        gsap.to(loadingScreen, {duration: 1, opacity: 0, display: 'none', ease: 'power2.inOut'});
        
        // Animate main elements
        gsap.to('#main-title', {duration: 1, opacity: 1, y: 20, delay: 0.5});
        gsap.to('#main-subtitle', {duration: 1, opacity: 1, y: 20, delay: 0.7});
        gsap.to('#start-chat-btn', {duration: 1, opacity: 1, y: 20, delay: 0.9});
        gsap.to('#learn-more-btn', {duration: 1, opacity: 1, y: 20, delay: 1.1});
        gsap.to('#hero-image', {duration: 1, opacity: 1, scale: 1.05, delay: 1.3});

        // Animate feature cards
        gsap.to('.feature-card', {duration: 1, opacity: 1, y: 20, stagger: 0.2, delay: 1.5});

        });

    // Navbar transparency
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // FAQ toggle function
    function toggleFAQ(element) {
        const content = element.nextElementSibling;
        const icon = element.querySelector('i');
        
        gsap.to(content, {
            duration: 0.3,
            height: content.style.height === 'auto' ? 0 : 'auto',
            opacity: content.style.height === 'auto' ? 0 : 1,
            onComplete: () => {
                content.classList.toggle('hidden');
            }
        });

        gsap.to(icon, {
            duration: 0.3,
            rotation: icon.style.transform === 'rotate(180deg)' ? 0 : 180
        });
    }

    // Handle user profile form submission
    const userProfileForm = document.getElementById('user-profile-form');
    userProfileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        userName = document.getElementById('user-name').value;
        userAge = document.getElementById('user-age').value;
        userGender = document.querySelector('input[name="user-gender"]:checked').value;
        
        // Redirect to chat interface page
        window.location.href = `chat1.html?name=${encodeURIComponent(userName)}&age=${encodeURIComponent(userAge)}&gender=${encodeURIComponent(userGender)}`;
    });

    
    // Ripple effect
    document.querySelectorAll('.ripple').forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    