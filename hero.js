const synergyData = [];

const synergyListEditable = document.getElementById('synergy-list-editable');
const synergyListStatic = document.getElementById('synergy-list-static');

document.getElementById('add-synergy-btn').addEventListener('click', () => {
    if (synergyData.length >= 3) {
        alert("Maksimal 3s sinergy.");
        return;
    }
    document.getElementById('synergy-modal').classList.remove('hidden');
});

document.getElementById('cancel-synergy').addEventListener('click', () => {
    document.getElementById('synergy-modal').classList.add('hidden');
});

document.getElementById('save-synergy').addEventListener('click', () => {
    const type = document.getElementById('synergy-type').value;
    const count = parseInt(document.getElementById('synergy-count').value);

    if (!type || count < 1) {
        alert("Pilih sinergy dan jumlah dengan benar.");
        return;
    }

    if (synergyData.find(s => s.type === type)) {
        alert("Sinergy sudah ditambahkan.");
        return;
    }

    synergyData.push({ type, count });
    renderSynergyLists();
    document.getElementById('synergy-modal').classList.add('hidden');
});

function renderSynergyLists() {
    synergyListEditable.innerHTML = '';
    synergyListStatic.innerHTML = '';

    synergyData.forEach((item, index) => {
        // Versi Editable
        const editable = document.createElement('div');
        editable.className = 'bg-blue-100 border px-3 py-2 rounded flex items-center gap-2 text-sm';
        editable.innerHTML = `
        <span class="font-medium capitalize">${item.type} (${item.count})</span>
        <button onclick="removeSynergy(${index})" class="text-red-500 hover:text-red-700 font-bold">&times;</button>
      `;
        synergyListEditable.appendChild(editable);

        // Versi Static
        const staticBox = document.createElement('div');
        staticBox.className = 'bg-gradient-to-t from-[rgba(249,115,22,0.1)] to-[rgba(220,38,38,0.1)] rounded-full border border-white font-thin capitalize text-white flex items-center justify-center';
        staticBox.textContent = `[${item.count}] ${item.type}`;
        staticBox.style = 'height: 16px;'
        synergyListStatic.appendChild(staticBox);
    });
}

function removeSynergy(index) {
    synergyData.splice(index, 1);
    renderSynergyLists();
}

window.removeSynergy = removeSynergy;