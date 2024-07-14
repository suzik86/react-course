export function mockFetch(data: unknown) {
  return jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
      ok: true,
    }),
  );
}
