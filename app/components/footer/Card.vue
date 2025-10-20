<script setup></script>

<template>
   <div class="footer__card">

         <SvgoPaypal filled :fontControlled="false"  class="footer__paypal" width="34" height="22" fill="none" />
         <SvgoVisa filled :fontControlled="false"  class="footer__visa" width="34" height="22" />
         <SvgoMaster filled :fontControlled="false"  class="footer__master" width="34" height="22" />
         <SvgoDicover filled :fontControlled="false"  class="footer__dicover" width="34" height="22" />
         <SvgoEkspress filled :fontControlled="false"  class="footer__ekspress" width="34" height="22" />
        </div>
</template>

<style scoped lang="scss">
.footer__card {
 display: flex;
    column-gap: 10px;
    align-items: center;

  svg {
    opacity: 0.8;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
}
.footer{

&__paypal{
//  width: 34px;
//  height: 22px;
//  fill: none !important;

}

}
</style>
