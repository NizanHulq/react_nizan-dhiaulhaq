import "@testing-library/jest-dom"
import { render, screen, fireEvent, within } from "@testing-library/react"

import CreateProduct from "@/pages/product/CreateProduct"
import { beforeEach, describe, it } from "vitest"

describe("Create Product", () => {
  beforeEach(() => {
    render(<CreateProduct />)
  })

  describe("Form", () => {
    it("should render form", () => {
      const form = screen.getByLabelText("form")
      expect(form).toBeInTheDocument()

      expect(within(form).getByLabelText("product-name")).toBeTruthy()
      expect(within(form).getByLabelText("product-cat")).toBeTruthy()
      expect(within(form).getByLabelText("product-freshness")).toBeTruthy()
      expect(within(form).getByLabelText("product-price")).toBeTruthy()
      expect(within(form).getByLabelText("product-image")).toBeTruthy()
      expect(within(form).getByLabelText("product-description")).toBeTruthy()

      const submitButton = screen.getByLabelText("submit-button")
      expect(submitButton).toBeInTheDocument()
    })

    it("should be able to input all data", () => {
      const form = screen.getByLabelText("form")

      //product-name
      const productName = within(form).getByLabelText("product-name")
      fireEvent.change(productName, { target: { value: "Product Name" } })
      expect(productName.value).toBe("Product Name")

      //product-cat
      const productCat = within(form).getByLabelText("product-cat");
      fireEvent.select(productCat, { target: { value: "Two" } });
      expect(productCat.value).toBe("Two");

      //product-freshness
      const brandRadio = within(form).getByLabelText("brand");
      fireEvent.click(brandRadio);
      expect(brandRadio.checked).toBe(true);

      const secondRadio = within(form).getByLabelText("second");
      fireEvent.click(secondRadio);
      expect(secondRadio.checked).toBe(true);

      const refurbishedRadio = within(form).getByLabelText("refurbished");
      fireEvent.click(refurbishedRadio);
      expect(refurbishedRadio.checked).toBe(true);

      //product-price
      const productPrice = within(form).getByLabelText("product-price");
      fireEvent.change(productPrice, { target: { value: "100000" } });
      expect(productPrice.value).toBe("100000");

      //product-image
      const imageInput = within(form).getByLabelText("product-image");
      const file = new File(["((:"], "product-image.svg", { type: "image/svg+xml" });
      fireEvent.change(imageInput, { target: { files: [file] } });
      expect(imageInput.files[0]).toBe(file);

      //product-description
      const productDescription = within(form).getByLabelText("product-description");
      fireEvent.change(productDescription, { target: { value: "This is a product description!" } });
      expect(productDescription.value).toBe("This is a product description!");
    })

  })
})
