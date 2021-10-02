import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor() { }

  nome:string = "João Pedro";

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  btnToggle(event: any): void {
    const nav = document.getElementById('navigation')
    nav?.classList.toggle('active')
    const active = nav?.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {
      (event.currentTarget.setAttribute('aria-label', "Fechar Menu"))
    } else {
      (event.currentTarget.setAttribute('aria-label', "Abrir Menu"))
    }
  }

  modalCadastrarProduto() {
    const modal = document.querySelector('#modal-cardastro-produtos');
    const close = document.querySelector('.fecha');
    modal?.classList.add('mostrar');
    modal?.addEventListener('click', (e) => {
      if (e.target === modal || e.target === close) {
        modal.classList.remove('mostrar');
      }
    });
  }
}
