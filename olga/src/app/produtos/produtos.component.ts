import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

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

  modalEndereco(): any {
    const modal = document.querySelector('#modal-endereco');
    const close = document.querySelector('.fechar');
    modal?.classList.add('mostrar');
    modal?.addEventListener('click', (e) => {
      if (e.target === modal || e.target === close) {
        modal.classList.remove('mostrar');
      }
    });
  }


  modalLogin() {
    const modal = document.querySelector('#modal-login');
    const close = document.querySelector('.close');
    modal?.classList.add('mostrar');
    modal?.addEventListener('click', (e) => {
      if (e.target === modal || e.target === close) {
        modal.classList.remove('mostrar');
      }
    });
  }

  modalCadastrar() {
    const modal = document.querySelector('#modal-cadastro');
    const close = document.querySelector('.fecha');
    modal?.classList.add('mostrar');
    modal?.addEventListener('click', (e) => {
      if (e.target === modal || e.target === close) {
        modal.classList.remove('mostrar');
      }
    });
  }
}
