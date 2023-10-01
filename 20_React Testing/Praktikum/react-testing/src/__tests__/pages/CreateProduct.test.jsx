import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"

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
    })

    it("should be able to input product name and display the value", () => {
      const productName = screen.getByLabelText("product-name")
      fireEvent.change(productName, { target: { value: "Product 1" } })
      expect(productName).toHaveValue("Product 1")
    })

  })
})
