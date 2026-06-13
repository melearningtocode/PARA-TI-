const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name-input');
const inputBox = document.getElementById('input-box');
const confessionBox = document.getElementById('confession-box');
const textTyping = document.getElementById('text-typing');

submitBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    
    if (name === "") {
        alert("Su nombre no puede estar vacío. 🥰");
        return;
    }

    // Đổi class để ẩn hộp nhập và hiện hộp chữ chạy đúng theo HTML mới
    inputBox.classList.remove('show');
    confessionBox.classList.add('show');

    // Nội dung bức thư chạy chữ
    const message = `Hola, ${name}! 💕\n\nHola, mi amor. Mi corazón me ha estado susurrando algo, y creo que por fin es hora de decírtelo... (>_<,).\n\nSimplemente no puedo dejar de pensar en lo increíble que eres, y... para mí eres una latina absolutamente atractiva y hermosa, pero... es mucho más que eso jajajajajajja.\n\nCreo que, aunque ya parecemos pareja, siento que falta algo. Te debo algo que toda chica merece. Así que vamos a ello ahora mismo. Voy a ponerme romántico a partir de ahora, así que sí, lee todo estooooo.\n\nBueno, llevamos un par de meses siendo amigos. Últimamente, siento que algo está creciendo dentro de mí. Una sensación de estar en casa, una paz interior. Para ser honesto, nunca esperé que me gustaras tanto. Tu sola presencia es como un soplo de aire fresco. Siento que no tengo que esconder nada ni cambiar nada de mí para cumplir tus expectativas, porque sé que de verdad te importo. No puedo dejar de pensar en cómo, de repente, conocí a alguien que es la pareja perfecta para mis "goofyness"; alguien que se preocupa por mí hasta en las cosas más pequeñas, como mi sueño o mi comida; alguien que se entrega por completo conmigo cada día y, al mismo tiempo, valora cada esfuerzo que hago.\n\nContigo, me siento como un niño otra vez. Tenerte aquí es un regalo. Soy un chico tan afortunado, te valoro muchísimo y quiero que sepas que estoy profundamente enamorado de ti. Me inspiras a esforzarme aún más por nuestra relación, para que algún día podamos conocernos en persona.\n\nAsí que, esta es mi parte. ¿Estás listaaaa?\n\n¿Me dejas ser tu novio a partir de hoy? No prometo ser el novio "perfecto"; yo también tengo mis defectos. Pero prometo seguir trabajando en mí mismo, ser mejor para ti y para nosotros, para que te sientas segura y protegida a mi lado, para ayudarte a quitarte un peso de encima y para que podamos crear muchos recuerdos juntos a partir de hoy.\n\n¿Qué piensas? ¡Dímelo en cuanto termines de leer estoooo!`;

    // Reset lại nội dung chữ đề phòng ấn nhiều lần
    textTyping.innerHTML = "";
    
    // Gọi hàm chạy chữ
    typeWriter(message, 0, 30); 
});

function typeWriter(text, index, speed) {
    if (index < text.length) {
        textTyping.innerHTML += text.charAt(index);
        index++;
        
        // Tự động cuộn xuống khi chữ dài ra
        confessionBox.scrollTop = confessionBox.scrollHeight;
        
        setTimeout(() => {
            typeWriter(text, index, speed);
        }, speed);
    }
}