let selectedIndex = null;

document.querySelectorAll('.hero').forEach(img => {
    img.addEventListener('click', () => {
        selectedIndex = img.dataset.index;

        if (selectedIndex === "CMD") {
            document.getElementById('cmd-gallery').classList.remove('hidden');
        } else {
            document.getElementById('hero-gallery').classList.remove('hidden');
        }
    });
});

// Hero biasa
document.querySelectorAll('.hero-option').forEach(option => {
    option.addEventListener('click', () => {
        const imageUrl = option.src;
        const slot = document.querySelector(`.hero[data-index="${selectedIndex}"]`);
        if (slot) {
            slot.src = imageUrl;
        }
        document.getElementById('hero-gallery').classList.add('hidden');
    });
});

// Commander
document.querySelectorAll('.cmd-option').forEach(option => {
    option.addEventListener('click', () => {
        const imageUrl = option.src;
        const slot = document.querySelector(`.hero[data-index="CMD"]`);
        if (slot) {
            slot.src = imageUrl;
        }
        document.getElementById('cmd-gallery').classList.add('hidden');
    });
});

document.getElementById('hero-gallery').addEventListener('click', (e) => {
    if (e.target.id === 'hero-gallery') {
        e.target.classList.add('hidden');
    }
});

document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // Buat semua button tidak aktif dulu
        document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));

        // Aktifkan tombol yang diklik
        this.classList.add('active');

        const selectedRole = this.dataset.role;
        const heroes = document.querySelectorAll('#hero-gallery-grid .hero-option');

        heroes.forEach(hero => {
            const roles = hero.getAttribute('data-role').split(',');
            if (selectedRole === 'all' || roles.includes(selectedRole)) {
                hero.classList.remove('hidden');
            } else {
                hero.classList.add('hidden');
            }
        });
    });
});


const titleText = document.getElementById('title-text');
const titlePopup = document.getElementById('title-popup');
const titleInput = document.getElementById('title-input');
const cancelBtn = document.getElementById('cancel-btn');
const saveBtn = document.getElementById('save-btn');

// Saat title diklik
titleText.addEventListener('click', () => {
    titleInput.value = titleText.innerText;
    titlePopup.classList.remove('hidden');
});

// Batal
cancelBtn.addEventListener('click', () => {
    titlePopup.classList.add('hidden');
});

// Simpan perubahan
saveBtn.addEventListener('click', () => {
    titleText.innerText = titleInput.value || 'Title';
    titlePopup.classList.add('hidden');
});
