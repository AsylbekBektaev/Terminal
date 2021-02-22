class Error_event {
    static Adress_terminal(){
        let address_button=document.querySelector('.Next_terminals'),
            blockError=document.querySelector('.Error_border'),
            addr_block=document.querySelector('.Terminal_block_adr');
        address_button.addEventListener('click',()=>{
            blockError.style.display='none';
            addr_block.style.display='block';
        });
    }
    static backError(){
        let back_button_addr=document.querySelector('.Terminal_block_button'),
            blockError=document.querySelector('.Error_border'),
            addr_block=document.querySelector('.Terminal_block_adr');
        back_button_addr.addEventListener('click',()=>{
            blockError.style.display='block';
            addr_block.style.display='none';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Error_event.Adress_terminal();
    Error_event.backError();
});
