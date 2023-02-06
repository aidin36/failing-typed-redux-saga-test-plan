export const NO_OP = 'NO_OP'

export const noOpAction = () => ({
  type: NO_OP,
})

export type NoOpAction = ReturnType<typeof noOpAction>
