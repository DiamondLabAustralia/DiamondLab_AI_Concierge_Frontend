(function () {
  const chatButton = document.createElement('div');
  chatButton.innerHTML = '💬';
  chatButton.style.position = 'fixed';
  chatButton.style.bottom = '20px';
  chatButton.style.right = '20px';
  chatButton.style.width = '60px';
  chatButton.style.height = '60px';
  chatButton.style.borderRadius = '50%';
  chatButton.style.backgroundColor = '#000';
  chatButton.style.color = '#fff';
  chatButton.style.display = 'flex';
  chatButton.style.alignItems = 'center';
  chatButton.style.justifyContent = 'center';
  chatButton.style.fontSize = '28px';
  chatButton.style.cursor = 'pointer';
  chatButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
  chatButton.title = 'Chat with us';
  document.body.appendChild(chatButton);

  const iframe = document.createElement('iframe');
  iframe.src = 'https://diamondlab-ai-backend.onrender.com'; // Your backend server
  iframe.style.position = 'fixed';
  iframe.style.bottom = '90px';
  iframe.style.right = '20px';
  iframe.style.width = '400px';
  iframe.style.height = '500px';
  iframe.style.border = '1px solid #ccc';
  iframe.style.borderRadius = '12px';
  iframe.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
  iframe.style.display = 'none';
  iframe.style.zIndex = '1000';
  document.body.appendChild(iframe);

  let isOpen = false;
  chatButton.onclick = () => {
    isOpen = !isOpen;
    iframe.style.display = isOpen ? 'block' : 'none';
  };
})();
