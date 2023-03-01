export default {
  beforeMount(el) {
    el.innerHTML += `<i
    class="fa fa-headphones-alt float-right text-green-400 text-xl"
  ></i>`;
  },
};

/* 
  Directives have lifecycle hooks like components:
  1. beforeMount - When directive is first bound to element and before parent component is mounted.
  2. mounted - When the directive is mounted to the document.
  3. beforeUpdate - Called before the directive is updated.
  4. updated - Called after the directive is updated.
  5. beforeUnmount - Called before a directive is unmounted from the document.
  6. unmounted - Called after a directive is unmounted from the document.

  Hook arguments:
  1. el - The element the binding sits on.
  2. binding - An object which contains the arguments that are passed into the hooks.
  3. vnode - Allows you to refer directly to the node in the virtual DOM.
  4. prevNode - The previous vnode object before the directive was updated. (applies to beforeUpdate and updated hooks only)
*/
