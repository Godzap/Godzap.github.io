document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuToggle && closeMobileMenu && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNav.classList.remove('hidden');
        });
        
        closeMobileMenu.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
        });
    }

    // Modal logic
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modalClosers = document.querySelectorAll('[data-modal-close]');

    modalTriggers.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        });
    });

    modalClosers.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-close');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.matches('[data-modal-target]')) {
            return;
        }
        const openModal = document.querySelector('.fixed.inset-0.flex');
        if (openModal && event.target === openModal) {
            openModal.classList.add('hidden');
            openModal.classList.remove('flex');
        }
    });
});
