import React from 'react';

function Products() {
  return (
    <section className="w-full flex flex-col items-center px-open-gutter-mobile py-open-5xl tablet:items-stretch desktop:items-stretch mx-auto gap-open-2xl tablet:gap-open-4xl desktop:gap-open-4xl  -text--openfoundation-white tablet:py-open-7xl desktop:py-open-7xl max-w-[1320px]">
      <h3 className="font-open-heading text-start text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxl">
        Open Products
      </h3>
      <div className="w-full flex justify-center tablet:justify-between desktop:justify-between max-w-[1320px]">
        <div
          className="text-center tablet:text-left desktop:text-left font-open-heading text-open-font-xxxl inline-block
          bg-clip-text
        text-transparent bg-gradient-to-r -from--open-accent-accent-1 -to--open-accent-accent-2"
        >
          <p>스마트 자동화의</p>
          <p>모든 것.</p>
        </div>
        <p className="hidden tablet:flex desktop:flex flex-col font-open-label text-end text-open-font-medium tablet:text-open-font-large desktop:text-open-font-large">
          <span className="flex flex-col -text--open-gray-400">
            <span>기획부터 시뮬레이션까지 </span>
            <span>솔루션부터 디바이스까지</span>
          </span>
          <span className="flex flex-col">
            <span>스마트 자동화에 필요한 모든 것,</span>
            <span>OpenSG 가 함께합니다.</span>{' '}
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-open-gutter-mobile tablet:gap-open-2xl desktop:gap-open-2xl">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default Products;

function ProductCard() {
  return (
    <div className="w-full flex justify-between items-center gap-open-4xl p-open-2xl tablet:p-open-4xl desktop:px-open-5xl desktop:py-open-4xl -bg--open-gray-950 rounded-[30px]">
      <div className="flex flex-col items-center tablet:items-start desktop:items-start gap-open-xl">
        <h4 className="flex tablet:flex-col desktop:flex-col gap-open-sm font-open-label text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxxl">
          <span>Open</span>
          <span>Solutions</span>
        </h4>
        <div className="flex flex-col items-center tablet:items-start desktop:items-start gap-open-lg">
          <p className="font-open-paragraph text-open-font-medium desktop:text-open-font-large">
            OpenSG 솔루션에 관한 짧은 소개를 작성하는 란
          </p>
          <button
            type="button"
            className="font-open-label text-open-font-medium desktop:text-open-font-large"
          >
            Learn More &gt;
          </button>
        </div>
      </div>
      <div className="hidden tablet:w-[300px] desktop:w-[400px] text-center">이미지</div>
    </div>
  );
}
