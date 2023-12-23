// const shareButton = document.querySelectorAll('.tile-share-btn')
// console.log(shareButton)

// async function copyText (e) {
//     e.preventDefault()
//      const link = this.getAttribute('link');
//      console.log(link)
//      try{
//         await navigator.clipboard.writeText(link)
//         alert('Copied the text:' + link)
//      } catch (err) {
//         console.log(err)
//      }
// }
// shareButton.forEach(shareButton => shareButton.addEventListener('click', copyText));



const shareButton = document.querySelectorAll('.tile-share-btn')
console.log(shareButton)
async function copyText(e) {
    e.preventDefault();
    const link = this.getAttribute('link');
    console.log(link)

    try {
        const textArea = document.createElement('textarea');
        textArea.value = link;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // alert('Copied the text: ' + link);
    } catch (err) {
        console.error('Error copying text to clipboard', err);
    }
}
shareButton.forEach(shareButton => shareButton.addEventListener('click', copyText));


const shareButton2 = document.querySelectorAll('.share-btn')
console.log(shareButton2)
shareButton2.forEach(shareButton2 => shareButton2.addEventListener('click', copyText));

$('.tile-share-btn').click(function(){
    $('.alert').removeClass('hide')
    $('.alert').addClass('show');
    setTimeout(function(){
    $('.alert').addClass('hide');
    $('.alert').removeClass('show');
    },10000)
})
$('.ok-btn').click(function(){
    $('.alert').addClass('hide');
    $('.alert').removeClass('show');
})